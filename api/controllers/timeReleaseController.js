const TimeRelease = require("../models/newFeedModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

//create
exports.createTimeRelease = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  const timeRelease = await TimeRelease.create(req.body);
  res.status(201).json({
    success: true,
    timeRelease,
  });
});

// Get All
exports.getTimeRelease = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 8;
  const timeReleasesCount = await TimeRelease.countDocuments();

  const apiFeature = new ApiFeatures(TimeRelease.find(), req.query)
    .search()
    .filter();

  let timeReleases = await apiFeature.query;

  let filteredTimeReleasesCount = timeReleases.length;

  apiFeature.pagination(resultPerPage);

  timeReleases = await apiFeature.query;

  res.status(200).json({
    success: true,
    timeReleases,
    timeReleasesCount,
    resultPerPage,
    filteredTimeReleasesCount,
  });
});

exports.getAdminTimeRelease = catchAsyncErrors(async (req, res, next) => {
  const timeReleases = await TimeRelease.find();
  res.status(200).json({
    success: true,
    timeReleases,
  });
});
// update
exports.updateTimeRelease = catchAsyncErrors(async (req, res, next) => {
  const newData = {
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    category: req.body.category,
  };
  const timeRelease = await TimeRelease.findByIdAndUpdate(
    req.params.id,
    newData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    timeRelease,
  });
});

exports.getTimeReleaseDetails = catchAsyncErrors(async (req, res, next) => {
  const timeRelease = await TimeRelease.findById(req.params.id);

  if (!timeRelease) {
    return next(new ErrorHander("Không tìm thấy bài viết", 404));
  }

  res.status(200).json({
    success: true,
    timeRelease,
  });
});

// Delete Orders

exports.deleteTimeRelease = catchAsyncErrors(async (req, res, next) => {
  const timeRelease = await TimeRelease.findById(req.params.id);

  if (!timeRelease) {
    return next(new ErrorHander("Không tìm thấy bài viết", 404));
  }
  await timeRelease.remove();

  res.status(200).json({
    success: true,
    message: "Xóa bài viết thành công !",
  });
});
