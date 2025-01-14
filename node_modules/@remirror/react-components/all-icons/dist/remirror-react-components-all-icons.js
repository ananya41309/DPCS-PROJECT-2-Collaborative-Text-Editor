var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/icons/all.ts
import {
  accountBoxFill,
  accountBoxLine,
  accountCircleFill,
  accountCircleLine,
  accountPinBoxFill,
  accountPinBoxLine,
  accountPinCircleFill,
  accountPinCircleLine,
  addBoxFill,
  addBoxLine,
  addCircleFill,
  addCircleLine,
  adminFill,
  adminLine,
  advertisementFill,
  advertisementLine,
  airplayFill,
  airplayLine,
  alarmFill,
  alarmLine,
  alarmWarningFill,
  alarmWarningLine,
  albumFill,
  albumLine,
  alertFill,
  aliensFill,
  aliensLine,
  alipayFill,
  alipayLine,
  amazonFill,
  amazonLine,
  anchorFill,
  anchorLine,
  ancientGateFill,
  ancientGateLine,
  ancientPavilionFill,
  ancientPavilionLine,
  androidFill,
  androidLine,
  angularjsFill,
  angularjsLine,
  anticlockwise2Fill,
  anticlockwise2Line,
  anticlockwiseFill,
  anticlockwiseLine,
  appleFill,
  appleLine,
  apps2Fill,
  apps2Line,
  appsFill,
  appStoreFill,
  appStoreLine,
  archiveDrawerFill,
  archiveDrawerLine,
  archiveFill,
  archiveLine,
  arrowDownCircleFill,
  arrowDownCircleLine,
  arrowDownFill,
  arrowDownLine,
  arrowDownSLine,
  arrowDropDownFill,
  arrowDropDownLine,
  arrowDropLeftFill,
  arrowDropLeftLine,
  arrowDropRightFill,
  arrowDropRightLine,
  arrowDropUpFill,
  arrowDropUpLine,
  arrowGoBackLine,
  arrowGoForwardLine,
  arrowLeftCircleFill,
  arrowLeftCircleLine,
  arrowLeftDownFill,
  arrowLeftDownLine,
  arrowLeftFill,
  arrowLeftLine,
  arrowLeftRightFill,
  arrowLeftRightLine,
  arrowLeftSLine,
  arrowLeftUpFill,
  arrowLeftUpLine,
  arrowRightCircleFill,
  arrowRightCircleLine,
  arrowRightDownFill,
  arrowRightDownLine,
  arrowRightFill,
  arrowRightLine,
  arrowRightSLine,
  arrowRightUpFill,
  arrowRightUpLine,
  arrowUpCircleFill,
  arrowUpCircleLine,
  arrowUpDownFill,
  arrowUpDownLine,
  arrowUpFill,
  arrowUpLine,
  arrowUpSLine,
  artboard2Fill,
  artboard2Line,
  artboardFill,
  artboardLine,
  articleFill,
  articleLine,
  aspectRatioFill,
  aspectRatioLine,
  atFill,
  atLine,
  attachmentFill,
  attachmentLine,
  auctionFill,
  auctionLine,
  awardFill,
  awardLine,
  baiduFill,
  baiduLine,
  ballPenFill,
  ballPenLine,
  bankCard2Fill,
  bankCard2Line,
  bankCardFill,
  bankCardLine,
  bankFill,
  bankLine,
  barChart2Fill,
  barChart2Line,
  barChartBoxFill,
  barChartBoxLine,
  barChartFill,
  barChartGroupedFill,
  barChartGroupedLine,
  barChartHorizontalFill,
  barChartHorizontalLine,
  barChartLine,
  barcodeBoxFill,
  barcodeBoxLine,
  barcodeFill,
  barcodeLine,
  barricadeFill,
  barricadeLine,
  baseStationFill,
  baseStationLine,
  basketballFill,
  basketballLine,
  battery2ChargeFill,
  battery2ChargeLine,
  battery2Fill,
  battery2Line,
  batteryChargeFill,
  batteryChargeLine,
  batteryFill,
  batteryLine,
  batteryLowFill,
  batteryLowLine,
  batterySaverFill,
  batterySaverLine,
  batteryShareFill,
  batteryShareLine,
  bearSmileFill,
  bearSmileLine,
  behanceFill,
  behanceLine,
  bellFill,
  bellLine,
  bikeFill,
  bikeLine,
  bilibiliFill,
  bilibiliLine,
  billFill,
  billiardsFill,
  billiardsLine,
  billLine,
  bitCoinFill,
  bitCoinLine,
  blazeFill,
  blazeLine,
  bluetoothConnectFill,
  bluetoothConnectLine,
  bluetoothFill,
  bluetoothLine,
  blurOffFill,
  blurOffLine,
  bodyScanFill,
  bodyScanLine,
  book2Fill,
  book2Line,
  book3Fill,
  book3Line,
  bookFill,
  bookletFill,
  bookletLine,
  bookLine,
  bookmark2Fill,
  bookmark2Line,
  bookmark3Fill,
  bookmark3Line,
  bookMarkFill,
  bookmarkFill,
  bookMarkLine,
  bookmarkLine,
  bookOpenFill,
  bookOpenLine,
  bookReadFill,
  bookReadLine,
  boxingFill,
  boxingLine,
  bracesFill,
  bracketsFill,
  bracketsLine,
  briefcase2Fill,
  briefcase2Line,
  briefcase3Fill,
  briefcase3Line,
  briefcase4Fill,
  briefcase4Line,
  briefcase5Fill,
  briefcase5Line,
  briefcaseFill,
  briefcaseLine,
  broadcastFill,
  broadcastLine,
  brush2Fill,
  brush2Line,
  brush3Fill,
  brush3Line,
  brush4Fill,
  brush4Line,
  brushFill,
  brushLine,
  bubbleChartFill,
  bubbleChartLine,
  bug2Fill,
  bug2Line,
  bugFill,
  bugLine,
  building2Fill,
  building2Line,
  building3Fill,
  building3Line,
  building4Fill,
  building4Line,
  buildingFill,
  buildingLine,
  bus2Fill,
  bus2Line,
  busFill,
  busLine,
  busWifiFill,
  busWifiLine,
  cactusFill,
  cactusLine,
  cake2Fill,
  cake2Line,
  cake3Fill,
  cake3Line,
  cakeFill,
  cakeLine,
  calculatorFill,
  calculatorLine,
  calendar2Fill,
  calendar2Line,
  calendarCheckFill,
  calendarCheckLine,
  calendarEventFill,
  calendarEventLine,
  calendarFill,
  calendarLine,
  calendarTodoFill,
  calendarTodoLine,
  camera2Fill,
  camera2Line,
  camera3Fill,
  camera3Line,
  cameraFill,
  cameraLensFill,
  cameraLensLine,
  cameraLine,
  cameraOffFill,
  cameraOffLine,
  cameraSwitchFill,
  cameraSwitchLine,
  capsuleFill,
  capsuleLine,
  caravanFill,
  caravanLine,
  carFill,
  carLine,
  carWashingFill,
  carWashingLine,
  castFill,
  castLine,
  cellphoneFill,
  cellphoneLine,
  celsiusFill,
  celsiusLine,
  centosFill,
  centosLine,
  characterRecognitionFill,
  characterRecognitionLine,
  chargingPile2Fill,
  chargingPile2Line,
  chargingPileFill,
  chargingPileLine,
  chat1Fill,
  chat1Line,
  chat2Fill,
  chat2Line,
  chat3Fill,
  chat3Line,
  chat4Fill,
  chat4Line,
  chatCheckFill,
  chatCheckLine,
  chatDeleteFill,
  chatDeleteLine,
  chatDownloadFill,
  chatDownloadLine,
  chatFollowUpFill,
  chatFollowUpLine,
  chatForwardFill,
  chatForwardLine,
  chatHeartFill,
  chatHeartLine,
  chatHistoryFill,
  chatHistoryLine,
  chatNewFill,
  chatOffFill,
  chatOffLine,
  chatPollFill,
  chatPollLine,
  chatPrivateFill,
  chatPrivateLine,
  chatQuoteFill,
  chatQuoteLine,
  chatSettingsFill,
  chatSettingsLine,
  chatSmile2Fill,
  chatSmile2Line,
  chatSmile3Fill,
  chatSmile3Line,
  chatSmileFill,
  chatSmileLine,
  chatUploadFill,
  chatUploadLine,
  chatVoiceFill,
  chatVoiceLine,
  checkboxBlankCircleFill,
  checkboxBlankCircleLine,
  checkboxBlankFill,
  checkboxBlankLine,
  checkboxCircleFill,
  checkboxFill,
  checkboxIndeterminateFill,
  checkboxIndeterminateLine,
  checkboxLine,
  checkboxMultipleBlankFill,
  checkboxMultipleBlankLine,
  checkboxMultipleFill,
  checkDoubleFill,
  checkDoubleLine,
  checkFill,
  checkLine,
  chinaRailwayFill,
  chinaRailwayLine,
  chromeFill,
  chromeLine,
  clapperboardFill,
  clapperboardLine,
  clockwise2Fill,
  clockwise2Line,
  clockwiseFill,
  clockwiseLine,
  closeCircleFill,
  closedCaptioningFill,
  closedCaptioningLine,
  cloudFill,
  cloudLine,
  cloudOffFill,
  cloudOffLine,
  cloudWindyFill,
  cloudWindyLine,
  cloudy2Fill,
  cloudy2Line,
  cloudyFill,
  cloudyLine,
  codeBoxFill,
  codeBoxLine,
  codeFill,
  codepenFill,
  codepenLine,
  codeSFill,
  codeSLine,
  codeSSlashFill,
  codeSSlashLine,
  coinFill,
  coinLine,
  coinsFill,
  coinsLine,
  collageFill,
  collageLine,
  commandFill,
  commandLine,
  communityFill,
  communityLine,
  compass2Fill,
  compass2Line,
  compass3Fill,
  compass3Line,
  compass4Fill,
  compass4Line,
  compassDiscoverFill,
  compassDiscoverLine,
  compasses2Fill,
  compasses2Line,
  compassesFill,
  compassesLine,
  compassFill,
  compassLine,
  computerFill,
  computerLine,
  contactsBook2Fill,
  contactsBook2Line,
  contactsBookFill,
  contactsBookLine,
  contactsBookUploadFill,
  contactsBookUploadLine,
  contactsFill,
  contactsLine,
  contrast2Fill,
  contrast2Line,
  contrastDrop2Fill,
  contrastDrop2Line,
  contrastDropFill,
  contrastDropLine,
  contrastFill,
  contrastLine,
  copperCoinFill,
  copperCoinLine,
  copperDiamondFill,
  copperDiamondLine,
  copyleftFill,
  copyleftLine,
  copyrightFill,
  copyrightLine,
  coreosFill,
  coreosLine,
  coupon2Fill,
  coupon2Line,
  coupon3Fill,
  coupon3Line,
  coupon4Fill,
  coupon4Line,
  coupon5Fill,
  coupon5Line,
  couponFill,
  couponLine,
  cpuFill,
  cpuLine,
  creativeCommonsByFill,
  creativeCommonsByLine,
  creativeCommonsFill,
  creativeCommonsLine,
  creativeCommonsNcFill,
  creativeCommonsNcLine,
  creativeCommonsNdFill,
  creativeCommonsNdLine,
  creativeCommonsSaFill,
  creativeCommonsSaLine,
  creativeCommonsZeroFill,
  creativeCommonsZeroLine,
  criminalFill,
  criminalLine,
  crop2Fill,
  crop2Line,
  cropFill,
  cropLine,
  css3Fill,
  css3Line,
  cupFill,
  cupLine,
  currencyFill,
  currencyLine,
  cursorFill,
  cursorLine,
  customerService2Fill,
  customerService2Line,
  customerServiceFill,
  customerServiceLine,
  dashboard2Fill,
  dashboard2Line,
  dashboard3Fill,
  dashboard3Line,
  dashboardFill,
  dashboardLine,
  database2Fill,
  database2Line,
  databaseFill,
  databaseLine,
  deleteBack2Fill,
  deleteBack2Line,
  deleteBackFill,
  deleteBackLine,
  deleteBin2Fill,
  deleteBin2Line,
  deleteBin3Fill,
  deleteBin3Line,
  deleteBin4Fill,
  deleteBin4Line,
  deleteBin5Fill,
  deleteBin5Line,
  deleteBin6Fill,
  deleteBin6Line,
  deleteBin7Fill,
  deleteBin7Line,
  deviceFill,
  deviceLine,
  deviceRecoverFill,
  deviceRecoverLine,
  dingdingFill,
  dingdingLine,
  directionFill,
  directionLine,
  discFill,
  discLine,
  discordFill,
  discordLine,
  discussFill,
  discussLine,
  dislikeFill,
  dislikeLine,
  disqusFill,
  disqusLine,
  divideFill,
  divideLine,
  donutChartFill,
  donutChartLine,
  doorClosedFill,
  doorClosedLine,
  doorFill,
  doorLine,
  doorLockBoxFill,
  doorLockBoxLine,
  doorLockFill,
  doorLockLine,
  doorOpenFill,
  doorOpenLine,
  dossierFill,
  dossierLine,
  doubanFill,
  doubanLine,
  download2Line,
  downloadCloud2Fill,
  downloadCloud2Line,
  downloadCloudFill,
  downloadCloudLine,
  downloadFill,
  downloadLine,
  draftFill,
  draftLine,
  dragDropFill,
  dragMove2Fill,
  dragMove2Line,
  dragMoveFill,
  dragMoveLine,
  dribbbleFill,
  dribbbleLine,
  driveFill,
  driveLine,
  drizzleFill,
  drizzleLine,
  dropboxFill,
  dropboxLine,
  dropFill,
  dropLine,
  dualSim1Fill,
  dualSim1Line,
  dualSim2Fill,
  dualSim2Line,
  dvdFill,
  dvdLine,
  dvFill,
  dvLine,
  earthFill,
  earthLine,
  earthquakeFill,
  earthquakeLine,
  eBike2Fill,
  eBike2Line,
  eBikeFill,
  eBikeLine,
  edgeFill,
  edgeLine,
  edit2Fill,
  edit2Line,
  editBoxFill,
  editBoxLine,
  editCircleFill,
  editCircleLine,
  editFill,
  editLine,
  ejectFill,
  ejectLine,
  emotion2Fill,
  emotion2Line,
  emotionFill,
  emotionHappyFill,
  emotionHappyLine,
  emotionLaughFill,
  emotionLaughLine,
  emotionLine,
  emotionNormalFill,
  emotionNormalLine,
  emotionSadFill,
  emotionSadLine,
  emotionUnhappyFill,
  emotionUnhappyLine,
  empathizeFill,
  empathizeLine,
  equalizerFill,
  equalizerLine,
  eraserFill,
  eraserLine,
  errorWarningFill,
  evernoteFill,
  evernoteLine,
  exchangeBoxFill,
  exchangeBoxLine,
  exchangeCnyFill,
  exchangeCnyLine,
  exchangeDollarFill,
  exchangeDollarLine,
  exchangeFill,
  exchangeFundsFill,
  exchangeFundsLine,
  exchangeLine,
  externalLinkLine,
  eye2Fill,
  eye2Line,
  eyeCloseFill,
  eyeCloseLine,
  eyeFill,
  eyeLine,
  eyeOffFill,
  eyeOffLine,
  facebookBoxFill,
  facebookBoxLine,
  facebookCircleFill,
  facebookCircleLine,
  facebookFill,
  facebookLine,
  fahrenheitFill,
  fahrenheitLine,
  feedbackFill,
  feedbackLine,
  file2Fill,
  file2Line,
  file3Fill,
  file3Line,
  file4Fill,
  file4Line,
  fileAddFill,
  fileAddLine,
  fileChart2Fill,
  fileChart2Line,
  fileChartFill,
  fileChartLine,
  fileCloudFill,
  fileCloudLine,
  fileCodeFill,
  fileCodeLine,
  fileCopy2Fill,
  fileCopy2Line,
  fileCopyFill,
  fileDamageFill,
  fileDamageLine,
  fileDownloadFill,
  fileDownloadLine,
  fileEditFill,
  fileEditLine,
  fileExcel2Fill,
  fileExcel2Line,
  fileExcelFill,
  fileExcelLine,
  fileFill,
  fileForbidFill,
  fileForbidLine,
  fileGifFill,
  fileGifLine,
  fileHistoryFill,
  fileHistoryLine,
  fileHwpFill,
  fileHwpLine,
  fileInfoFill,
  fileInfoLine,
  fileLine,
  fileList2Fill,
  fileList2Line,
  fileList3Fill,
  fileList3Line,
  fileListFill,
  fileListLine,
  fileLockFill,
  fileLockLine,
  fileMarkFill,
  fileMarkLine,
  fileMusicFill,
  fileMusicLine,
  filePaper2Fill,
  filePaper2Line,
  filePaperFill,
  filePaperLine,
  filePdfFill,
  filePdfLine,
  filePpt2Fill,
  filePpt2Line,
  filePptFill,
  filePptLine,
  fileReduceFill,
  fileReduceLine,
  fileSearchFill,
  fileSearchLine,
  fileSettingsFill,
  fileSettingsLine,
  fileShield2Fill,
  fileShield2Line,
  fileShieldFill,
  fileShieldLine,
  fileShredFill,
  fileShredLine,
  fileTextFill,
  fileTextLine,
  fileTransferFill,
  fileTransferLine,
  fileUnknowFill,
  fileUnknowLine,
  fileUploadFill,
  fileUploadLine,
  fileUserFill,
  fileUserLine,
  fileWarningFill,
  fileWarningLine,
  fileWord2Fill,
  fileWord2Line,
  fileWordFill,
  fileWordLine,
  fileZipFill,
  fileZipLine,
  filmFill,
  filmLine,
  filter2Fill,
  filter2Line,
  filter3Fill,
  filter3Line,
  filterFill,
  filterLine,
  filterOffFill,
  filterOffLine,
  finderFill,
  finderLine,
  findReplaceFill,
  findReplaceLine,
  fingerprint2Fill,
  fingerprint2Line,
  fingerprintFill,
  fingerprintLine,
  fireFill,
  firefoxFill,
  firefoxLine,
  fireLine,
  firstAidKitFill,
  firstAidKitLine,
  flag2Fill,
  flag2Line,
  flagFill,
  flagLine,
  flashlightFill,
  flashlightLine,
  flaskFill,
  flaskLine,
  flightLandFill,
  flightLandLine,
  flightTakeoffFill,
  flightTakeoffLine,
  floodFill,
  floodLine,
  flutterFill,
  flutterLine,
  focus2Fill,
  focus2Line,
  focus3Fill,
  focus3Line,
  focusFill,
  focusLine,
  foggyFill,
  foggyLine,
  folder2Fill,
  folder2Line,
  folder3Fill,
  folder3Line,
  folder4Fill,
  folder4Line,
  folder5Fill,
  folder5Line,
  folderAddFill,
  folderAddLine,
  folderChart2Fill,
  folderChart2Line,
  folderChartFill,
  folderChartLine,
  folderDownloadFill,
  folderDownloadLine,
  folderFill,
  folderForbidFill,
  folderForbidLine,
  folderHistoryFill,
  folderHistoryLine,
  folderInfoFill,
  folderInfoLine,
  folderKeyholeFill,
  folderKeyholeLine,
  folderLine,
  folderLockFill,
  folderLockLine,
  folderMusicFill,
  folderMusicLine,
  folderOpenFill,
  folderOpenLine,
  folderReceivedFill,
  folderReceivedLine,
  folderReduceFill,
  folderReduceLine,
  folderSettingsFill,
  folderSettingsLine,
  foldersFill,
  folderSharedFill,
  folderSharedLine,
  folderShield2Fill,
  folderShield2Line,
  folderShieldFill,
  folderShieldLine,
  foldersLine,
  folderTransferFill,
  folderTransferLine,
  folderUnknowFill,
  folderUnknowLine,
  folderUploadFill,
  folderUploadLine,
  folderUserFill,
  folderUserLine,
  folderWarningFill,
  folderWarningLine,
  folderZipFill,
  folderZipLine,
  footballFill,
  footballLine,
  footprintFill,
  footprintLine,
  forbid2Fill,
  forbid2Line,
  forbidFill,
  forbidLine,
  fourKFill,
  fourKLine,
  fridgeFill,
  fridgeLine,
  fullscreenExitFill,
  fullscreenFill,
  functionFill,
  functionLine,
  fundsBoxFill,
  fundsBoxLine,
  fundsFill,
  fundsLine,
  galleryFill,
  galleryLine,
  galleryUploadFill,
  gameFill,
  gameLine,
  gamepadFill,
  gamepadLine,
  gasStationFill,
  gasStationLine,
  gatsbyFill,
  gatsbyLine,
  genderlessFill,
  genderlessLine,
  ghost2Fill,
  ghost2Line,
  ghostFill,
  ghostLine,
  ghostSmileFill,
  ghostSmileLine,
  gift2Fill,
  gift2Line,
  giftFill,
  giftLine,
  gitBranchFill,
  gitBranchLine,
  gitCommitFill,
  gitCommitLine,
  githubFill,
  githubLine,
  gitlabFill,
  gitlabLine,
  gitMergeFill,
  gitMergeLine,
  gitPullRequestFill,
  gitPullRequestLine,
  gitRepositoryCommitsFill,
  gitRepositoryCommitsLine,
  gitRepositoryFill,
  gitRepositoryLine,
  gitRepositoryPrivateFill,
  gitRepositoryPrivateLine,
  globalFill,
  globalLine,
  globeFill,
  globeLine,
  gobletFill,
  gobletLine,
  googleFill,
  googleLine,
  googlePlayFill,
  googlePlayLine,
  governmentFill,
  governmentLine,
  gpsFill,
  gpsLine,
  gradienterFill,
  gradienterLine,
  gridFill,
  gridLine,
  group2Fill,
  group2Line,
  groupFill,
  groupLine,
  guideFill,
  guideLine,
  hailFill,
  hailLine,
  hammerFill,
  hammerLine,
  handbagFill,
  handbagLine,
  handCoinFill,
  handCoinLine,
  handHeartFill,
  handHeartLine,
  handSanitizerFill,
  handSanitizerLine,
  hardDrive2Fill,
  hardDrive2Line,
  hardDriveFill,
  hardDriveLine,
  haze2Fill,
  haze2Line,
  hazeFill,
  hazeLine,
  hdFill,
  hdLine,
  headphoneFill,
  headphoneLine,
  healthBookFill,
  healthBookLine,
  heart2Fill,
  heart2Line,
  heart3Fill,
  heart3Line,
  heartAddFill,
  heartAddLine,
  heartFill,
  heartLine,
  heartPulseFill,
  heartPulseLine,
  heartsFill,
  heartsLine,
  heavyShowersFill,
  heavyShowersLine,
  historyFill,
  historyLine,
  home2Fill,
  home2Line,
  home3Fill,
  home3Line,
  home4Fill,
  home4Line,
  home5Fill,
  home5Line,
  home6Fill,
  home6Line,
  home7Fill,
  home7Line,
  home8Fill,
  home8Line,
  homeFill,
  homeGearFill,
  homeGearLine,
  homeHeartFill,
  homeHeartLine,
  homeLine,
  homeSmile2Fill,
  homeSmile2Line,
  homeSmileFill,
  homeSmileLine,
  homeWifiFill,
  homeWifiLine,
  honorOfKingsFill,
  honorOfKingsLine,
  honourFill,
  honourLine,
  hospitalFill,
  hospitalLine,
  hotelBedFill,
  hotelBedLine,
  hotelFill,
  hotelLine,
  hotspotFill,
  hotspotLine,
  hqFill,
  hqLine,
  html5Fill,
  html5Line,
  ieFill,
  ieLine,
  image2Fill,
  image2Line,
  imageAddFill,
  imageEditFill,
  imageFill,
  inboxArchiveFill,
  inboxArchiveLine,
  inboxFill,
  inboxLine,
  inboxUnarchiveFill,
  inboxUnarchiveLine,
  increaseDecreaseFill,
  increaseDecreaseLine,
  indeterminateCircleFill,
  indeterminateCircleLine,
  informationFill,
  infraredThermometerFill,
  infraredThermometerLine,
  inkBottleFill,
  inkBottleLine,
  inputMethodFill,
  inputMethodLine,
  instagramFill,
  instagramLine,
  installFill,
  installLine,
  invisionFill,
  invisionLine,
  kakaoTalkFill,
  kakaoTalkLine,
  key2Fill,
  key2Line,
  keyboardBoxFill,
  keyboardBoxLine,
  keyboardFill,
  keyboardLine,
  keyFill,
  keyLine,
  keynoteFill,
  keynoteLine,
  knifeBloodFill,
  knifeBloodLine,
  knifeFill,
  knifeLine,
  landscapeFill,
  landscapeLine,
  layout2Fill,
  layout2Line,
  layout3Fill,
  layout3Line,
  layout4Fill,
  layout4Line,
  layout5Fill,
  layout5Line,
  layout6Fill,
  layout6Line,
  layoutBottom2Fill,
  layoutBottom2Line,
  layoutBottomFill,
  layoutBottomLine,
  layoutColumnFill,
  layoutFill,
  layoutGridFill,
  layoutGridLine,
  layoutLeft2Fill,
  layoutLeft2Line,
  layoutLeftFill,
  layoutLeftLine,
  layoutLine,
  layoutMasonryFill,
  layoutMasonryLine,
  layoutRight2Fill,
  layoutRight2Line,
  layoutRightFill,
  layoutRightLine,
  layoutRowFill,
  layoutRowLine,
  layoutTop2Fill,
  layoutTop2Line,
  layoutTopFill,
  layoutTopLine,
  leafFill,
  leafLine,
  lifebuoyFill,
  lifebuoyLine,
  lightbulbFill,
  lightbulbFlashFill,
  lightbulbFlashLine,
  lightbulbLine,
  lineChartFill,
  lineChartLine,
  lineFill,
  lineLine,
  linkedinBoxFill,
  linkedinBoxLine,
  linkedinFill,
  linkedinLine,
  linksFill,
  linksLine,
  listSettingsFill,
  listSettingsLine,
  liveFill,
  liveLine,
  loader2Fill,
  loader2Line,
  loader3Fill,
  loader3Line,
  loader4Fill,
  loader4Line,
  loader5Fill,
  loader5Line,
  loaderFill,
  loaderLine,
  lock2Fill,
  lock2Line,
  lockFill,
  lockLine,
  lockPasswordFill,
  lockPasswordLine,
  lockUnlockFill,
  lockUnlockLine,
  loginBoxFill,
  loginBoxLine,
  loginCircleFill,
  loginCircleLine,
  logoutBoxFill,
  logoutBoxLine,
  logoutBoxRFill,
  logoutBoxRLine,
  logoutCircleFill,
  logoutCircleLine,
  logoutCircleRFill,
  logoutCircleRLine,
  luggageCartFill,
  luggageCartLine,
  luggageDepositFill,
  luggageDepositLine,
  lungsFill,
  lungsLine,
  macbookFill,
  macbookLine,
  macFill,
  macLine,
  magicFill,
  magicLine,
  mailAddFill,
  mailAddLine,
  mailCheckFill,
  mailCheckLine,
  mailCloseFill,
  mailCloseLine,
  mailDownloadFill,
  mailDownloadLine,
  mailFill,
  mailForbidFill,
  mailForbidLine,
  mailLine,
  mailLockFill,
  mailLockLine,
  mailOpenFill,
  mailOpenLine,
  mailSendFill,
  mailSendLine,
  mailSettingsFill,
  mailSettingsLine,
  mailStarFill,
  mailStarLine,
  mailUnreadFill,
  mailUnreadLine,
  mailVolumeFill,
  mailVolumeLine,
  map2Fill,
  map2Line,
  mapFill,
  mapLine,
  mapPin2Fill,
  mapPin2Line,
  mapPin3Fill,
  mapPin3Line,
  mapPin4Fill,
  mapPin4Line,
  mapPin5Fill,
  mapPin5Line,
  mapPinAddFill,
  mapPinAddLine,
  mapPinFill,
  mapPinLine,
  mapPinRangeFill,
  mapPinRangeLine,
  mapPinTimeFill,
  mapPinTimeLine,
  mapPinUserFill,
  mapPinUserLine,
  markPenFill,
  markupFill,
  markupLine,
  mastercardFill,
  mastercardLine,
  mastodonFill,
  mastodonLine,
  medal2Fill,
  medal2Line,
  medalFill,
  medalLine,
  medicineBottleFill,
  medicineBottleLine,
  mediumFill,
  mediumLine,
  menFill,
  menLine,
  mentalHealthFill,
  mentalHealthLine,
  menu2Fill,
  menu2Line,
  menu3Fill,
  menu3Line,
  menu4Fill,
  menu4Line,
  menu5Fill,
  menu5Line,
  menuAddFill,
  menuAddLine,
  menuFill,
  menuFoldFill,
  menuFoldLine,
  menuLine,
  menuUnfoldFill,
  menuUnfoldLine,
  message2Fill,
  message2Line,
  message3Fill,
  message3Line,
  messageFill,
  messageLine,
  messengerFill,
  messengerLine,
  meteorFill,
  meteorLine,
  mic2Fill,
  mic2Line,
  micFill,
  mickeyFill,
  mickeyLine,
  micLine,
  micOffFill,
  micOffLine,
  microscopeFill,
  microscopeLine,
  microsoftFill,
  microsoftLine,
  miniProgramFill,
  miniProgramLine,
  mistFill,
  mistLine,
  moneyCnyBoxFill,
  moneyCnyBoxLine,
  moneyCnyCircleFill,
  moneyCnyCircleLine,
  moneyDollarBoxFill,
  moneyDollarBoxLine,
  moneyDollarCircleFill,
  moneyDollarCircleLine,
  moneyEuroBoxFill,
  moneyEuroBoxLine,
  moneyEuroCircleFill,
  moneyEuroCircleLine,
  moneyPoundBoxFill,
  moneyPoundBoxLine,
  moneyPoundCircleFill,
  moneyPoundCircleLine,
  moonClearFill,
  moonClearLine,
  moonCloudyFill,
  moonCloudyLine,
  moonFill,
  moonFoggyFill,
  moonFoggyLine,
  moonLine,
  more2Fill,
  more2Line,
  moreLine,
  motorbikeFill,
  motorbikeLine,
  mouseFill,
  mouseLine,
  movie2Fill,
  movie2Line,
  movieFill,
  movieLine,
  music2Fill,
  music2Line,
  musicFill,
  musicLine,
  mvFill,
  mvLine,
  navigationFill,
  navigationLine,
  neteaseCloudMusicFill,
  neteaseCloudMusicLine,
  netflixFill,
  netflixLine,
  newspaperFill,
  newspaperLine,
  notification2Fill,
  notification2Line,
  notification3Fill,
  notification3Line,
  notification4Fill,
  notification4Line,
  notificationBadgeFill,
  notificationBadgeLine,
  notificationFill,
  notificationLine,
  notificationOffFill,
  notificationOffLine,
  npmjsFill,
  npmjsLine,
  numbersFill,
  numbersLine,
  nurseFill,
  nurseLine,
  oilFill,
  oilLine,
  openArmFill,
  openArmLine,
  openSourceFill,
  openSourceLine,
  operaFill,
  operaLine,
  orderPlayFill,
  orderPlayLine,
  outlet2Fill,
  outlet2Line,
  outletFill,
  outletLine,
  pagesFill,
  pagesLine,
  paintBrushFill,
  paintBrushLine,
  paintFill,
  paintLine,
  paletteFill,
  paletteLine,
  pantoneFill,
  pantoneLine,
  parentFill,
  parenthesesFill,
  parenthesesLine,
  parentLine,
  parkingBoxFill,
  parkingBoxLine,
  parkingFill,
  parkingLine,
  passportFill,
  passportLine,
  patreonFill,
  patreonLine,
  pauseCircleFill,
  pauseCircleLine,
  pauseFill,
  pauseLine,
  pauseMiniFill,
  pauseMiniLine,
  paypalFill,
  paypalLine,
  pencilRuler2Fill,
  pencilRuler2Line,
  pencilRulerFill,
  pencilRulerLine,
  penNibFill,
  penNibLine,
  percentFill,
  percentLine,
  phoneCameraFill,
  phoneCameraLine,
  phoneFill,
  phoneFindFill,
  phoneFindLine,
  phoneLine,
  phoneLockFill,
  phoneLockLine,
  pictureInPicture2Fill,
  pictureInPicture2Line,
  pictureInPictureExitFill,
  pictureInPictureExitLine,
  pictureInPictureFill,
  pictureInPictureLine,
  pieChart2Fill,
  pieChart2Line,
  pieChartBoxFill,
  pieChartBoxLine,
  pieChartFill,
  pieChartLine,
  pinDistanceFill,
  pinDistanceLine,
  pingPongFill,
  pingPongLine,
  pinterestFill,
  pinterestLine,
  pixelfedFill,
  pixelfedLine,
  planeFill,
  planeLine,
  plantFill,
  plantLine,
  playCircleFill,
  playCircleLine,
  playFill,
  playLine,
  playList2Fill,
  playList2Line,
  playListAddFill,
  playListAddLine,
  playListFill,
  playListLine,
  playMiniFill,
  playMiniLine,
  playstationFill,
  playstationLine,
  plug2Fill,
  plug2Line,
  plugFill,
  plugLine,
  polaroid2Fill,
  polaroid2Line,
  polaroidFill,
  polaroidLine,
  policeCarFill,
  policeCarLine,
  priceTag2Fill,
  priceTag2Line,
  priceTag3Fill,
  priceTag3Line,
  priceTagFill,
  priceTagLine,
  printerCloudFill,
  printerCloudLine,
  printerFill,
  printerLine,
  productHuntFill,
  productHuntLine,
  profileFill,
  profileLine,
  projector2Fill,
  projector2Line,
  projectorFill,
  projectorLine,
  psychotherapyFill,
  psychotherapyLine,
  pulseFill,
  pulseLine,
  pushpin2Fill,
  pushpin2Line,
  pushpinFill,
  pushpinLine,
  qqFill,
  qqLine,
  qrCodeFill,
  qrCodeLine,
  qrScan2Fill,
  qrScan2Line,
  qrScanFill,
  qrScanLine,
  questionAnswerFill,
  questionAnswerLine,
  questionFill,
  questionLine,
  questionnaireFill,
  questionnaireLine,
  quillPenFill,
  quillPenLine,
  radarFill,
  radarLine,
  radio2Fill,
  radio2Line,
  radioButtonFill,
  radioButtonLine,
  radioFill,
  radioLine,
  rainbowFill,
  rainbowLine,
  rainyFill,
  rainyLine,
  reactjsFill,
  reactjsLine,
  recordCircleFill,
  recordCircleLine,
  recordMailFill,
  recordMailLine,
  recycleFill,
  recycleLine,
  redditFill,
  redditLine,
  redPacketFill,
  redPacketLine,
  refreshFill,
  refreshLine,
  refund2Fill,
  refund2Line,
  refundFill,
  refundLine,
  registeredFill,
  registeredLine,
  remixiconFill,
  remixiconLine,
  remoteControl2Fill,
  remoteControl2Line,
  remoteControlFill,
  remoteControlLine,
  repeat2Fill,
  repeat2Line,
  repeatFill,
  repeatLine,
  repeatOneFill,
  repeatOneLine,
  replyAllFill,
  replyAllLine,
  replyFill,
  replyLine,
  reservedFill,
  reservedLine,
  restartFill,
  restartLine,
  restaurant2Fill,
  restaurant2Line,
  restaurantFill,
  restaurantLine,
  restTimeFill,
  restTimeLine,
  rewindFill,
  rewindLine,
  rewindMiniFill,
  rewindMiniLine,
  rhythmFill,
  rhythmLine,
  ridingFill,
  ridingLine,
  roadMapFill,
  roadMapLine,
  roadsterFill,
  roadsterLine,
  robotFill,
  robotLine,
  rocket2Fill,
  rocket2Line,
  rocketFill,
  rocketLine,
  rotateLockFill,
  rotateLockLine,
  routeFill,
  routeLine,
  routerFill,
  routerLine,
  rssFill,
  rssLine,
  ruler2Fill,
  ruler2Line,
  rulerFill,
  rulerLine,
  runFill,
  runLine,
  safariFill,
  safariLine,
  safe2Fill,
  safe2Line,
  safeFill,
  safeLine,
  sailboatFill,
  sailboatLine,
  save2Fill,
  save2Line,
  save3Fill,
  save3Line,
  saveFill,
  saveLine,
  scales2Fill,
  scales2Line,
  scales3Fill,
  scales3Line,
  scalesFill,
  scalesLine,
  scan2Fill,
  scan2Line,
  scanFill,
  scanLine,
  scissors2Fill,
  scissors2Line,
  scissorsCutFill,
  scissorsCutLine,
  scissorsLine,
  screenshot2Fill,
  screenshot2Line,
  screenshotFill,
  screenshotLine,
  sdCardFill,
  sdCardLine,
  sdCardMiniFill,
  sdCardMiniLine,
  search2Fill,
  search2Line,
  searchEyeFill,
  searchEyeLine,
  searchFill,
  securePaymentFill,
  securePaymentLine,
  seedlingFill,
  seedlingLine,
  sendPlane2Fill,
  sendPlane2Line,
  sendPlaneFill,
  sendPlaneLine,
  sensorFill,
  sensorLine,
  serverFill,
  serverLine,
  serviceFill,
  serviceLine,
  settings2Fill,
  settings2Line,
  settings3Fill,
  settings3Line,
  settings4Fill,
  settings4Line,
  settings5Fill,
  settings5Line,
  settings6Fill,
  settings6Line,
  settingsFill,
  settingsLine,
  shape2Fill,
  shape2Line,
  shapeFill,
  shapeLine,
  shareBoxFill,
  shareBoxLine,
  shareCircleFill,
  shareCircleLine,
  shareFill,
  shareForward2Fill,
  shareForward2Line,
  shareForwardBoxFill,
  shareForwardBoxLine,
  shareForwardFill,
  shareForwardLine,
  shareLine,
  shieldCheckFill,
  shieldCheckLine,
  shieldCrossFill,
  shieldCrossLine,
  shieldFill,
  shieldFlashFill,
  shieldFlashLine,
  shieldKeyholeFill,
  shieldKeyholeLine,
  shieldLine,
  shieldStarFill,
  shieldStarLine,
  shieldUserFill,
  shieldUserLine,
  ship2Fill,
  ship2Line,
  shipFill,
  shipLine,
  shirtFill,
  shirtLine,
  shoppingBag2Fill,
  shoppingBag2Line,
  shoppingBag3Fill,
  shoppingBag3Line,
  shoppingBagFill,
  shoppingBagLine,
  shoppingBasket2Fill,
  shoppingBasket2Line,
  shoppingBasketFill,
  shoppingBasketLine,
  shoppingCart2Fill,
  shoppingCart2Line,
  shoppingCartFill,
  shoppingCartLine,
  showersFill,
  showersLine,
  shuffleFill,
  shuffleLine,
  shutDownFill,
  shutDownLine,
  sideBarFill,
  sideBarLine,
  signalTowerFill,
  signalTowerLine,
  signalWifi1Fill,
  signalWifi1Line,
  signalWifi2Fill,
  signalWifi2Line,
  signalWifi3Fill,
  signalWifi3Line,
  signalWifiErrorFill,
  signalWifiErrorLine,
  signalWifiFill,
  signalWifiLine,
  signalWifiOffFill,
  signalWifiOffLine,
  simCard2Fill,
  simCard2Line,
  simCardFill,
  simCardLine,
  sipFill,
  sipLine,
  skipBackFill,
  skipBackLine,
  skipBackMiniFill,
  skipBackMiniLine,
  skipForwardFill,
  skipForwardLine,
  skipForwardMiniFill,
  skipForwardMiniLine,
  skull2Fill,
  skull2Line,
  skullFill,
  skullLine,
  skypeFill,
  skypeLine,
  slackFill,
  slackLine,
  sliceFill,
  sliceLine,
  slideshow2Fill,
  slideshow2Line,
  slideshow3Fill,
  slideshow3Line,
  slideshow4Fill,
  slideshow4Line,
  slideshowFill,
  slideshowLine,
  smartphoneFill,
  smartphoneLine,
  snapchatFill,
  snapchatLine,
  snowyFill,
  snowyLine,
  soundcloudFill,
  soundcloudLine,
  soundModuleFill,
  soundModuleLine,
  spaceShipFill,
  spaceShipLine,
  spam2Fill,
  spam2Line,
  spam3Fill,
  spam3Line,
  spamFill,
  speaker2Fill,
  speaker2Line,
  speaker3Fill,
  speaker3Line,
  speakerFill,
  speakerLine,
  spectrumFill,
  spectrumLine,
  speedFill,
  speedLine,
  speedMiniFill,
  speedMiniLine,
  spotifyFill,
  spotifyLine,
  spyFill,
  spyLine,
  stackFill,
  stackLine,
  stackOverflowFill,
  stackOverflowLine,
  stackshareFill,
  stackshareLine,
  starFill,
  starHalfFill,
  starHalfLine,
  starHalfSFill,
  starHalfSLine,
  starLine,
  starSFill,
  starSLine,
  starSmileFill,
  starSmileLine,
  steamFill,
  steamLine,
  steering2Fill,
  steering2Line,
  steeringFill,
  steeringLine,
  stethoscopeFill,
  stethoscopeLine,
  stickyNote2Fill,
  stickyNote2Line,
  stickyNoteFill,
  stickyNoteLine,
  stockFill,
  stockLine,
  stopCircleFill,
  stopCircleLine,
  stopFill,
  stopLine,
  stopMiniFill,
  stopMiniLine,
  store2Fill,
  store2Line,
  store3Fill,
  store3Line,
  storeFill,
  storeLine,
  subtractFill,
  subwayFill,
  subwayLine,
  subwayWifiFill,
  subwayWifiLine,
  suitcase2Fill,
  suitcase2Line,
  suitcase3Fill,
  suitcase3Line,
  suitcaseFill,
  suitcaseLine,
  sunCloudyFill,
  sunCloudyLine,
  sunFill,
  sunFoggyFill,
  sunFoggyLine,
  sunLine,
  surgicalMaskFill,
  surgicalMaskLine,
  surroundSoundFill,
  surroundSoundLine,
  surveyFill,
  surveyLine,
  swapBoxFill,
  swapBoxLine,
  swapFill,
  swapLine,
  switchFill,
  switchLine,
  swordFill,
  swordLine,
  syringeFill,
  syringeLine,
  tableAltFill,
  tableAltLine,
  tableFill,
  tabletFill,
  tabletLine,
  takeawayFill,
  takeawayLine,
  taobaoFill,
  taobaoLine,
  tapeFill,
  tapeLine,
  taskFill,
  taskLine,
  taxiFill,
  taxiLine,
  taxiWifiFill,
  taxiWifiLine,
  tBoxFill,
  tBoxLine,
  teamFill,
  teamLine,
  telegramFill,
  telegramLine,
  tempColdFill,
  tempColdLine,
  tempHotFill,
  tempHotLine,
  terminalBoxFill,
  terminalBoxLine,
  terminalFill,
  terminalLine,
  terminalWindowFill,
  terminalWindowLine,
  testTubeFill,
  testTubeLine,
  thermometerFill,
  thermometerLine,
  thumbDownFill,
  thumbDownLine,
  thumbUpFill,
  thumbUpLine,
  thunderstormsFill,
  thunderstormsLine,
  ticket2Fill,
  ticket2Line,
  ticketFill,
  ticketLine,
  timeFill,
  timeLine,
  timer2Fill,
  timer2Line,
  timerFill,
  timerFlashFill,
  timerFlashLine,
  timerLine,
  todoFill,
  todoLine,
  toggleFill,
  toggleLine,
  toolsFill,
  toolsLine,
  tornadoFill,
  tornadoLine,
  trademarkFill,
  trademarkLine,
  trafficLightFill,
  trafficLightLine,
  trainFill,
  trainLine,
  trainWifiFill,
  trainWifiLine,
  travestiFill,
  travestiLine,
  treasureMapFill,
  treasureMapLine,
  trelloFill,
  trelloLine,
  trophyFill,
  trophyLine,
  truckFill,
  truckLine,
  tShirt2Fill,
  tShirt2Line,
  tShirtAirFill,
  tShirtAirLine,
  tShirtFill,
  tShirtLine,
  tumblrFill,
  tumblrLine,
  tv2Fill,
  tv2Line,
  tvFill,
  tvLine,
  twentyFourHoursFill,
  twentyFourHoursLine,
  twitchFill,
  twitchLine,
  twitterFill,
  twitterLine,
  typhoonFill,
  typhoonLine,
  ubuntuFill,
  ubuntuLine,
  uDiskFill,
  uDiskLine,
  umbrellaFill,
  umbrellaLine,
  uninstallFill,
  uninstallLine,
  unsplashFill,
  unsplashLine,
  upload2Line,
  uploadCloud2Fill,
  uploadCloud2Line,
  uploadCloudFill,
  uploadCloudLine,
  uploadFill,
  uploadLine,
  usbFill,
  usbLine,
  user2Fill,
  user2Line,
  user3Fill,
  user3Line,
  user4Fill,
  user4Line,
  user5Fill,
  user5Line,
  user6Fill,
  user6Line,
  userAddFill,
  userAddLine,
  userFill,
  userFollowFill,
  userFollowLine,
  userHeartFill,
  userHeartLine,
  userLine,
  userLocationFill,
  userLocationLine,
  userReceived2Fill,
  userReceived2Line,
  userReceivedFill,
  userReceivedLine,
  userSearchFill,
  userSearchLine,
  userSettingsFill,
  userSettingsLine,
  userShared2Fill,
  userShared2Line,
  userSharedFill,
  userSharedLine,
  userSmileFill,
  userSmileLine,
  userStarFill,
  userStarLine,
  userUnfollowFill,
  userUnfollowLine,
  userVoiceFill,
  userVoiceLine,
  videoAddFill,
  videoAddLine,
  videoChatFill,
  videoChatLine,
  videoDownloadFill,
  videoDownloadLine,
  videoFill,
  videoUploadFill,
  videoUploadLine,
  vidicon2Fill,
  vidicon2Line,
  vidiconFill,
  vidiconLine,
  vimeoFill,
  vimeoLine,
  vipCrown2Fill,
  vipCrown2Line,
  vipCrownFill,
  vipCrownLine,
  vipDiamondFill,
  vipDiamondLine,
  vipFill,
  vipLine,
  virusFill,
  virusLine,
  visaFill,
  visaLine,
  voiceprintFill,
  voiceprintLine,
  voiceRecognitionFill,
  voiceRecognitionLine,
  volumeDownFill,
  volumeDownLine,
  volumeMuteFill,
  volumeMuteLine,
  volumeOffVibrateFill,
  volumeOffVibrateLine,
  volumeUpFill,
  volumeUpLine,
  volumeVibrateFill,
  volumeVibrateLine,
  vuejsFill,
  vuejsLine,
  walkFill,
  walkLine,
  wallet2Fill,
  wallet2Line,
  wallet3Fill,
  wallet3Line,
  walletFill,
  walletLine,
  waterFlashFill,
  waterFlashLine,
  webcamFill,
  webcamLine,
  wechat2Fill,
  wechat2Line,
  wechatFill,
  wechatLine,
  wechatPayFill,
  wechatPayLine,
  weiboFill,
  weiboLine,
  whatsappFill,
  whatsappLine,
  wheelchairFill,
  wheelchairLine,
  wifiFill,
  wifiLine,
  wifiOffFill,
  wifiOffLine,
  window2Fill,
  window2Line,
  windowFill,
  windowLine,
  windowsFill,
  windowsLine,
  windyFill,
  windyLine,
  wirelessChargingFill,
  wirelessChargingLine,
  womenFill,
  womenLine,
  xboxFill,
  xboxLine,
  xingFill,
  xingLine,
  youtubeFill,
  youtubeLine,
  zcoolFill,
  zcoolLine,
  zhihuFill,
  zhihuLine,
  zoomInFill,
  zoomInLine,
  zoomOutFill,
  zoomOutLine,
  zzzFill,
  zzzLine
} from "@remirror/icons/all";

// src/icons/icons-base.tsx
import React, { createElement } from "react";
import * as Icons from "@remirror/icons";

// src/icons/icons-context.tsx
import { createContext } from "react";
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = createContext(DefaultContext);
var IconProvider = IconContext.Provider;

// src/icons/icons-base.tsx
function Tree2Element(tree) {
  return tree.map(
    (node, index) => {
      var _a;
      return createElement(node.tag, __spreadValues({ key: index }, node.attr), Tree2Element((_a = node.child) != null ? _a : []));
    }
  );
}
function GenIcon(tree, viewBox = "0 0 24 24") {
  return (props) => /* @__PURE__ */ React.createElement(IconBase, __spreadValues({ viewBox }, props), Tree2Element(tree != null ? tree : []));
}
var IconBase = (props) => {
  const renderSvg = (context) => {
    var _a, _b, _d;
    const computedSize = (_b = (_a = props.size) != null ? _a : context.size) != null ? _b : "1em";
    let className;
    if (context.className) {
      className = context.className;
    }
    if (props.className) {
      className = (className ? "".concat(className, " ") : "") + props.className;
    }
    const _c = props, { title } = _c, svgProps = __objRest(_c, ["title"]);
    return /* @__PURE__ */ React.createElement(
      "svg",
      __spreadProps(__spreadValues(__spreadValues({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, context.attr), svgProps), {
        className,
        style: __spreadValues(__spreadValues({ color: (_d = props.color) != null ? _d : context.color }, context.style), props.style),
        height: computedSize,
        width: computedSize,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      }),
      title && /* @__PURE__ */ React.createElement("title", null, title),
      props.children
    );
  };
  return /* @__PURE__ */ React.createElement(IconContext.Consumer, null, renderSvg);
};

// src/icons/core.ts
import {
  ab,
  addFill,
  addLine,
  alertLine,
  alignBottom,
  alignCenter,
  alignJustify,
  alignLeft,
  alignRight,
  alignTop,
  alignVertically,
  appsLine,
  arrowDownSFill,
  arrowGoBackFill,
  arrowGoForwardFill,
  arrowLeftSFill,
  arrowRightSFill,
  arrowUpSFill,
  asterisk,
  attachment2,
  bold,
  bracesLine,
  bringForward,
  bringToFront,
  chatNewLine,
  checkboxCircleLine,
  checkboxMultipleLine,
  clipboardFill,
  clipboardLine,
  closeCircleLine,
  closeFill,
  closeLine,
  codeLine,
  codeView,
  deleteBinFill,
  deleteBinLine,
  deleteColumn,
  deleteRow,
  doubleQuotesL,
  doubleQuotesR,
  download2Fill,
  dragDropLine,
  emphasis,
  emphasisCn,
  englishInput,
  errorWarningLine,
  externalLinkFill,
  fileCopyLine,
  flowChart,
  fontColor,
  fontSize,
  fontSize2,
  formatClear,
  fullscreenExitLine,
  fullscreenLine,
  functions,
  galleryUploadLine,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hashtag,
  heading,
  imageAddLine,
  imageEditLine,
  imageLine,
  indentDecrease,
  indentIncrease,
  informationLine,
  inputCursorMove,
  insertColumnLeft,
  insertColumnRight,
  insertRowBottom,
  insertRowTop,
  italic,
  layoutColumnLine,
  lineHeight,
  link,
  linkM,
  linkUnlink,
  linkUnlinkM,
  listCheck,
  listCheck2,
  listOrdered,
  listUnordered,
  markdownFill,
  markdownLine,
  markPenLine,
  mergeCellsHorizontal,
  mergeCellsVertical,
  mindMap,
  moreFill,
  nodeTree,
  number0,
  number1,
  number2,
  number3,
  number4,
  number5,
  number6,
  number7,
  number8,
  number9,
  omega,
  organizationChart,
  pageSeparator,
  paragraph,
  pencilFill,
  pencilLine,
  pinyinInput,
  questionMark,
  roundedCorner,
  scissorsFill,
  searchLine,
  sendBackward,
  sendToBack,
  separator,
  singleQuotesL,
  singleQuotesR,
  sortAsc,
  sortDesc,
  space,
  spamLine,
  splitCellsHorizontal,
  splitCellsVertical,
  strikethrough,
  strikethrough2,
  subscript,
  subscript2,
  subtractLine,
  superscript,
  superscript2,
  table2,
  tableLine,
  text,
  textDirectionL,
  textDirectionR,
  textSpacing,
  textWrap,
  translate,
  translate2,
  underline,
  upload2Fill,
  videoLine,
  wubiInput
} from "@remirror/icons";
var ABIcon = (props) => {
  return GenIcon(ab)(props);
};
var AddFillIcon = (props) => {
  return GenIcon(addFill)(props);
};
var AddLineIcon = (props) => {
  return GenIcon(addLine)(props);
};
var AlertLineIcon = (props) => {
  return GenIcon(alertLine)(props);
};
var AlignBottomIcon = (props) => {
  return GenIcon(alignBottom)(props);
};
var AlignCenterIcon = (props) => {
  return GenIcon(alignCenter)(props);
};
var AlignJustifyIcon = (props) => {
  return GenIcon(alignJustify)(props);
};
var AlignLeftIcon = (props) => {
  return GenIcon(alignLeft)(props);
};
var AlignRightIcon = (props) => {
  return GenIcon(alignRight)(props);
};
var AlignTopIcon = (props) => {
  return GenIcon(alignTop)(props);
};
var AlignVerticallyIcon = (props) => {
  return GenIcon(alignVertically)(props);
};
var AppsLineIcon = (props) => {
  return GenIcon(appsLine)(props);
};
var ArrowDownSFillIcon = (props) => {
  return GenIcon(arrowDownSFill)(props);
};
var ArrowGoBackFillIcon = (props) => {
  return GenIcon(arrowGoBackFill)(props);
};
var ArrowGoForwardFillIcon = (props) => {
  return GenIcon(arrowGoForwardFill)(props);
};
var ArrowLeftSFillIcon = (props) => {
  return GenIcon(arrowLeftSFill)(props);
};
var ArrowRightSFillIcon = (props) => {
  return GenIcon(arrowRightSFill)(props);
};
var ArrowUpSFillIcon = (props) => {
  return GenIcon(arrowUpSFill)(props);
};
var AsteriskIcon = (props) => {
  return GenIcon(asterisk)(props);
};
var Attachment2Icon = (props) => {
  return GenIcon(attachment2)(props);
};
var BoldIcon = (props) => {
  return GenIcon(bold)(props);
};
var BracesLineIcon = (props) => {
  return GenIcon(bracesLine)(props);
};
var BringForwardIcon = (props) => {
  return GenIcon(bringForward)(props);
};
var BringToFrontIcon = (props) => {
  return GenIcon(bringToFront)(props);
};
var ChatNewLineIcon = (props) => {
  return GenIcon(chatNewLine)(props);
};
var CheckboxCircleLineIcon = (props) => {
  return GenIcon(checkboxCircleLine)(props);
};
var CheckboxMultipleLineIcon = (props) => {
  return GenIcon(checkboxMultipleLine)(props);
};
var ClipboardFillIcon = (props) => {
  return GenIcon(clipboardFill)(props);
};
var ClipboardLineIcon = (props) => {
  return GenIcon(clipboardLine)(props);
};
var CloseCircleLineIcon = (props) => {
  return GenIcon(closeCircleLine)(props);
};
var CloseFillIcon = (props) => {
  return GenIcon(closeFill)(props);
};
var CloseLineIcon = (props) => {
  return GenIcon(closeLine)(props);
};
var CodeLineIcon = (props) => {
  return GenIcon(codeLine)(props);
};
var CodeViewIcon = (props) => {
  return GenIcon(codeView)(props);
};
var DeleteBinFillIcon = (props) => {
  return GenIcon(deleteBinFill)(props);
};
var DeleteBinLineIcon = (props) => {
  return GenIcon(deleteBinLine)(props);
};
var DeleteColumnIcon = (props) => {
  return GenIcon(deleteColumn)(props);
};
var DeleteRowIcon = (props) => {
  return GenIcon(deleteRow)(props);
};
var DoubleQuotesLIcon = (props) => {
  return GenIcon(doubleQuotesL)(props);
};
var DoubleQuotesRIcon = (props) => {
  return GenIcon(doubleQuotesR)(props);
};
var Download2FillIcon = (props) => {
  return GenIcon(download2Fill)(props);
};
var DragDropLineIcon = (props) => {
  return GenIcon(dragDropLine)(props);
};
var EmphasisCnIcon = (props) => {
  return GenIcon(emphasisCn)(props);
};
var EmphasisIcon = (props) => {
  return GenIcon(emphasis)(props);
};
var EnglishInputIcon = (props) => {
  return GenIcon(englishInput)(props);
};
var ErrorWarningLineIcon = (props) => {
  return GenIcon(errorWarningLine)(props);
};
var ExternalLinkFillIcon = (props) => {
  return GenIcon(externalLinkFill)(props);
};
var FileCopyLineIcon = (props) => {
  return GenIcon(fileCopyLine)(props);
};
var FlowChartIcon = (props) => {
  return GenIcon(flowChart)(props);
};
var FontColorIcon = (props) => {
  return GenIcon(fontColor)(props);
};
var FontSize2Icon = (props) => {
  return GenIcon(fontSize2)(props);
};
var FontSizeIcon = (props) => {
  return GenIcon(fontSize)(props);
};
var FormatClearIcon = (props) => {
  return GenIcon(formatClear)(props);
};
var FullscreenExitLineIcon = (props) => {
  return GenIcon(fullscreenExitLine)(props);
};
var FullscreenLineIcon = (props) => {
  return GenIcon(fullscreenLine)(props);
};
var FunctionsIcon = (props) => {
  return GenIcon(functions)(props);
};
var GalleryUploadLineIcon = (props) => {
  return GenIcon(galleryUploadLine)(props);
};
var H1Icon = (props) => {
  return GenIcon(h1)(props);
};
var H2Icon = (props) => {
  return GenIcon(h2)(props);
};
var H3Icon = (props) => {
  return GenIcon(h3)(props);
};
var H4Icon = (props) => {
  return GenIcon(h4)(props);
};
var H5Icon = (props) => {
  return GenIcon(h5)(props);
};
var H6Icon = (props) => {
  return GenIcon(h6)(props);
};
var HashtagIcon = (props) => {
  return GenIcon(hashtag)(props);
};
var HeadingIcon = (props) => {
  return GenIcon(heading)(props);
};
var ImageAddLineIcon = (props) => {
  return GenIcon(imageAddLine)(props);
};
var ImageEditLineIcon = (props) => {
  return GenIcon(imageEditLine)(props);
};
var ImageLineIcon = (props) => {
  return GenIcon(imageLine)(props);
};
var IndentDecreaseIcon = (props) => {
  return GenIcon(indentDecrease)(props);
};
var IndentIncreaseIcon = (props) => {
  return GenIcon(indentIncrease)(props);
};
var InformationLineIcon = (props) => {
  return GenIcon(informationLine)(props);
};
var InputCursorMoveIcon = (props) => {
  return GenIcon(inputCursorMove)(props);
};
var InsertColumnLeftIcon = (props) => {
  return GenIcon(insertColumnLeft)(props);
};
var InsertColumnRightIcon = (props) => {
  return GenIcon(insertColumnRight)(props);
};
var InsertRowBottomIcon = (props) => {
  return GenIcon(insertRowBottom)(props);
};
var InsertRowTopIcon = (props) => {
  return GenIcon(insertRowTop)(props);
};
var ItalicIcon = (props) => {
  return GenIcon(italic)(props);
};
var LayoutColumnLineIcon = (props) => {
  return GenIcon(layoutColumnLine)(props);
};
var LineHeightIcon = (props) => {
  return GenIcon(lineHeight)(props);
};
var LinkMIcon = (props) => {
  return GenIcon(linkM)(props);
};
var LinkUnlinkMIcon = (props) => {
  return GenIcon(linkUnlinkM)(props);
};
var LinkUnlinkIcon = (props) => {
  return GenIcon(linkUnlink)(props);
};
var LinkIcon = (props) => {
  return GenIcon(link)(props);
};
var ListCheck2Icon = (props) => {
  return GenIcon(listCheck2)(props);
};
var ListCheckIcon = (props) => {
  return GenIcon(listCheck)(props);
};
var ListOrderedIcon = (props) => {
  return GenIcon(listOrdered)(props);
};
var ListUnorderedIcon = (props) => {
  return GenIcon(listUnordered)(props);
};
var MarkPenLineIcon = (props) => {
  return GenIcon(markPenLine)(props);
};
var MarkdownFillIcon = (props) => {
  return GenIcon(markdownFill)(props);
};
var MarkdownLineIcon = (props) => {
  return GenIcon(markdownLine)(props);
};
var MergeCellsHorizontalIcon = (props) => {
  return GenIcon(mergeCellsHorizontal)(props);
};
var MergeCellsVerticalIcon = (props) => {
  return GenIcon(mergeCellsVertical)(props);
};
var MindMapIcon = (props) => {
  return GenIcon(mindMap)(props);
};
var MoreFillIcon = (props) => {
  return GenIcon(moreFill)(props);
};
var NodeTreeIcon = (props) => {
  return GenIcon(nodeTree)(props);
};
var Number0Icon = (props) => {
  return GenIcon(number0)(props);
};
var Number1Icon = (props) => {
  return GenIcon(number1)(props);
};
var Number2Icon = (props) => {
  return GenIcon(number2)(props);
};
var Number3Icon = (props) => {
  return GenIcon(number3)(props);
};
var Number4Icon = (props) => {
  return GenIcon(number4)(props);
};
var Number5Icon = (props) => {
  return GenIcon(number5)(props);
};
var Number6Icon = (props) => {
  return GenIcon(number6)(props);
};
var Number7Icon = (props) => {
  return GenIcon(number7)(props);
};
var Number8Icon = (props) => {
  return GenIcon(number8)(props);
};
var Number9Icon = (props) => {
  return GenIcon(number9)(props);
};
var OmegaIcon = (props) => {
  return GenIcon(omega)(props);
};
var OrganizationChartIcon = (props) => {
  return GenIcon(organizationChart)(props);
};
var PageSeparatorIcon = (props) => {
  return GenIcon(pageSeparator)(props);
};
var ParagraphIcon = (props) => {
  return GenIcon(paragraph)(props);
};
var PencilFillIcon = (props) => {
  return GenIcon(pencilFill)(props);
};
var PencilLineIcon = (props) => {
  return GenIcon(pencilLine)(props);
};
var PinyinInputIcon = (props) => {
  return GenIcon(pinyinInput)(props);
};
var QuestionMarkIcon = (props) => {
  return GenIcon(questionMark)(props);
};
var RoundedCornerIcon = (props) => {
  return GenIcon(roundedCorner)(props);
};
var ScissorsFillIcon = (props) => {
  return GenIcon(scissorsFill)(props);
};
var SearchLineIcon = (props) => {
  return GenIcon(searchLine)(props);
};
var SendBackwardIcon = (props) => {
  return GenIcon(sendBackward)(props);
};
var SendToBackIcon = (props) => {
  return GenIcon(sendToBack)(props);
};
var SeparatorIcon = (props) => {
  return GenIcon(separator)(props);
};
var SingleQuotesLIcon = (props) => {
  return GenIcon(singleQuotesL)(props);
};
var SingleQuotesRIcon = (props) => {
  return GenIcon(singleQuotesR)(props);
};
var SortAscIcon = (props) => {
  return GenIcon(sortAsc)(props);
};
var SortDescIcon = (props) => {
  return GenIcon(sortDesc)(props);
};
var SpaceIcon = (props) => {
  return GenIcon(space)(props);
};
var SpamLineIcon = (props) => {
  return GenIcon(spamLine)(props);
};
var SplitCellsHorizontalIcon = (props) => {
  return GenIcon(splitCellsHorizontal)(props);
};
var SplitCellsVerticalIcon = (props) => {
  return GenIcon(splitCellsVertical)(props);
};
var Strikethrough2Icon = (props) => {
  return GenIcon(strikethrough2)(props);
};
var StrikethroughIcon = (props) => {
  return GenIcon(strikethrough)(props);
};
var Subscript2Icon = (props) => {
  return GenIcon(subscript2)(props);
};
var SubscriptIcon = (props) => {
  return GenIcon(subscript)(props);
};
var SubtractLineIcon = (props) => {
  return GenIcon(subtractLine)(props);
};
var Superscript2Icon = (props) => {
  return GenIcon(superscript2)(props);
};
var SuperscriptIcon = (props) => {
  return GenIcon(superscript)(props);
};
var Table2Icon = (props) => {
  return GenIcon(table2)(props);
};
var TableLineIcon = (props) => {
  return GenIcon(tableLine)(props);
};
var TextDirectionLIcon = (props) => {
  return GenIcon(textDirectionL)(props);
};
var TextDirectionRIcon = (props) => {
  return GenIcon(textDirectionR)(props);
};
var TextSpacingIcon = (props) => {
  return GenIcon(textSpacing)(props);
};
var TextWrapIcon = (props) => {
  return GenIcon(textWrap)(props);
};
var TextIcon = (props) => {
  return GenIcon(text)(props);
};
var Translate2Icon = (props) => {
  return GenIcon(translate2)(props);
};
var TranslateIcon = (props) => {
  return GenIcon(translate)(props);
};
var UnderlineIcon = (props) => {
  return GenIcon(underline)(props);
};
var Upload2FillIcon = (props) => {
  return GenIcon(upload2Fill)(props);
};
var VideoLineIcon = (props) => {
  return GenIcon(videoLine)(props);
};
var WubiInputIcon = (props) => {
  return GenIcon(wubiInput)(props);
};

// src/icons/all.ts
var TwentyFourHoursFillIcon = (props) => {
  return GenIcon(twentyFourHoursFill)(props);
};
var TwentyFourHoursLineIcon = (props) => {
  return GenIcon(twentyFourHoursLine)(props);
};
var FourKFillIcon = (props) => {
  return GenIcon(fourKFill)(props);
};
var FourKLineIcon = (props) => {
  return GenIcon(fourKLine)(props);
};
var AccountBoxFillIcon = (props) => {
  return GenIcon(accountBoxFill)(props);
};
var AccountBoxLineIcon = (props) => {
  return GenIcon(accountBoxLine)(props);
};
var AccountCircleFillIcon = (props) => {
  return GenIcon(accountCircleFill)(props);
};
var AccountCircleLineIcon = (props) => {
  return GenIcon(accountCircleLine)(props);
};
var AccountPinBoxFillIcon = (props) => {
  return GenIcon(accountPinBoxFill)(props);
};
var AccountPinBoxLineIcon = (props) => {
  return GenIcon(accountPinBoxLine)(props);
};
var AccountPinCircleFillIcon = (props) => {
  return GenIcon(accountPinCircleFill)(props);
};
var AccountPinCircleLineIcon = (props) => {
  return GenIcon(accountPinCircleLine)(props);
};
var AddBoxFillIcon = (props) => {
  return GenIcon(addBoxFill)(props);
};
var AddBoxLineIcon = (props) => {
  return GenIcon(addBoxLine)(props);
};
var AddCircleFillIcon = (props) => {
  return GenIcon(addCircleFill)(props);
};
var AddCircleLineIcon = (props) => {
  return GenIcon(addCircleLine)(props);
};
var AdminFillIcon = (props) => {
  return GenIcon(adminFill)(props);
};
var AdminLineIcon = (props) => {
  return GenIcon(adminLine)(props);
};
var AdvertisementFillIcon = (props) => {
  return GenIcon(advertisementFill)(props);
};
var AdvertisementLineIcon = (props) => {
  return GenIcon(advertisementLine)(props);
};
var AirplayFillIcon = (props) => {
  return GenIcon(airplayFill)(props);
};
var AirplayLineIcon = (props) => {
  return GenIcon(airplayLine)(props);
};
var AlarmFillIcon = (props) => {
  return GenIcon(alarmFill)(props);
};
var AlarmLineIcon = (props) => {
  return GenIcon(alarmLine)(props);
};
var AlarmWarningFillIcon = (props) => {
  return GenIcon(alarmWarningFill)(props);
};
var AlarmWarningLineIcon = (props) => {
  return GenIcon(alarmWarningLine)(props);
};
var AlbumFillIcon = (props) => {
  return GenIcon(albumFill)(props);
};
var AlbumLineIcon = (props) => {
  return GenIcon(albumLine)(props);
};
var AlertFillIcon = (props) => {
  return GenIcon(alertFill)(props);
};
var AliensFillIcon = (props) => {
  return GenIcon(aliensFill)(props);
};
var AliensLineIcon = (props) => {
  return GenIcon(aliensLine)(props);
};
var AlipayFillIcon = (props) => {
  return GenIcon(alipayFill)(props);
};
var AlipayLineIcon = (props) => {
  return GenIcon(alipayLine)(props);
};
var AmazonFillIcon = (props) => {
  return GenIcon(amazonFill)(props);
};
var AmazonLineIcon = (props) => {
  return GenIcon(amazonLine)(props);
};
var AnchorFillIcon = (props) => {
  return GenIcon(anchorFill)(props);
};
var AnchorLineIcon = (props) => {
  return GenIcon(anchorLine)(props);
};
var AncientGateFillIcon = (props) => {
  return GenIcon(ancientGateFill)(props);
};
var AncientGateLineIcon = (props) => {
  return GenIcon(ancientGateLine)(props);
};
var AncientPavilionFillIcon = (props) => {
  return GenIcon(ancientPavilionFill)(props);
};
var AncientPavilionLineIcon = (props) => {
  return GenIcon(ancientPavilionLine)(props);
};
var AndroidFillIcon = (props) => {
  return GenIcon(androidFill)(props);
};
var AndroidLineIcon = (props) => {
  return GenIcon(androidLine)(props);
};
var AngularjsFillIcon = (props) => {
  return GenIcon(angularjsFill)(props);
};
var AngularjsLineIcon = (props) => {
  return GenIcon(angularjsLine)(props);
};
var Anticlockwise2FillIcon = (props) => {
  return GenIcon(anticlockwise2Fill)(props);
};
var Anticlockwise2LineIcon = (props) => {
  return GenIcon(anticlockwise2Line)(props);
};
var AnticlockwiseFillIcon = (props) => {
  return GenIcon(anticlockwiseFill)(props);
};
var AnticlockwiseLineIcon = (props) => {
  return GenIcon(anticlockwiseLine)(props);
};
var AppStoreFillIcon = (props) => {
  return GenIcon(appStoreFill)(props);
};
var AppStoreLineIcon = (props) => {
  return GenIcon(appStoreLine)(props);
};
var AppleFillIcon = (props) => {
  return GenIcon(appleFill)(props);
};
var AppleLineIcon = (props) => {
  return GenIcon(appleLine)(props);
};
var Apps2FillIcon = (props) => {
  return GenIcon(apps2Fill)(props);
};
var Apps2LineIcon = (props) => {
  return GenIcon(apps2Line)(props);
};
var AppsFillIcon = (props) => {
  return GenIcon(appsFill)(props);
};
var ArchiveDrawerFillIcon = (props) => {
  return GenIcon(archiveDrawerFill)(props);
};
var ArchiveDrawerLineIcon = (props) => {
  return GenIcon(archiveDrawerLine)(props);
};
var ArchiveFillIcon = (props) => {
  return GenIcon(archiveFill)(props);
};
var ArchiveLineIcon = (props) => {
  return GenIcon(archiveLine)(props);
};
var ArrowDownCircleFillIcon = (props) => {
  return GenIcon(arrowDownCircleFill)(props);
};
var ArrowDownCircleLineIcon = (props) => {
  return GenIcon(arrowDownCircleLine)(props);
};
var ArrowDownFillIcon = (props) => {
  return GenIcon(arrowDownFill)(props);
};
var ArrowDownLineIcon = (props) => {
  return GenIcon(arrowDownLine)(props);
};
var ArrowDownSLineIcon = (props) => {
  return GenIcon(arrowDownSLine)(props);
};
var ArrowDropDownFillIcon = (props) => {
  return GenIcon(arrowDropDownFill)(props);
};
var ArrowDropDownLineIcon = (props) => {
  return GenIcon(arrowDropDownLine)(props);
};
var ArrowDropLeftFillIcon = (props) => {
  return GenIcon(arrowDropLeftFill)(props);
};
var ArrowDropLeftLineIcon = (props) => {
  return GenIcon(arrowDropLeftLine)(props);
};
var ArrowDropRightFillIcon = (props) => {
  return GenIcon(arrowDropRightFill)(props);
};
var ArrowDropRightLineIcon = (props) => {
  return GenIcon(arrowDropRightLine)(props);
};
var ArrowDropUpFillIcon = (props) => {
  return GenIcon(arrowDropUpFill)(props);
};
var ArrowDropUpLineIcon = (props) => {
  return GenIcon(arrowDropUpLine)(props);
};
var ArrowGoBackLineIcon = (props) => {
  return GenIcon(arrowGoBackLine)(props);
};
var ArrowGoForwardLineIcon = (props) => {
  return GenIcon(arrowGoForwardLine)(props);
};
var ArrowLeftCircleFillIcon = (props) => {
  return GenIcon(arrowLeftCircleFill)(props);
};
var ArrowLeftCircleLineIcon = (props) => {
  return GenIcon(arrowLeftCircleLine)(props);
};
var ArrowLeftDownFillIcon = (props) => {
  return GenIcon(arrowLeftDownFill)(props);
};
var ArrowLeftDownLineIcon = (props) => {
  return GenIcon(arrowLeftDownLine)(props);
};
var ArrowLeftFillIcon = (props) => {
  return GenIcon(arrowLeftFill)(props);
};
var ArrowLeftLineIcon = (props) => {
  return GenIcon(arrowLeftLine)(props);
};
var ArrowLeftRightFillIcon = (props) => {
  return GenIcon(arrowLeftRightFill)(props);
};
var ArrowLeftRightLineIcon = (props) => {
  return GenIcon(arrowLeftRightLine)(props);
};
var ArrowLeftSLineIcon = (props) => {
  return GenIcon(arrowLeftSLine)(props);
};
var ArrowLeftUpFillIcon = (props) => {
  return GenIcon(arrowLeftUpFill)(props);
};
var ArrowLeftUpLineIcon = (props) => {
  return GenIcon(arrowLeftUpLine)(props);
};
var ArrowRightCircleFillIcon = (props) => {
  return GenIcon(arrowRightCircleFill)(props);
};
var ArrowRightCircleLineIcon = (props) => {
  return GenIcon(arrowRightCircleLine)(props);
};
var ArrowRightDownFillIcon = (props) => {
  return GenIcon(arrowRightDownFill)(props);
};
var ArrowRightDownLineIcon = (props) => {
  return GenIcon(arrowRightDownLine)(props);
};
var ArrowRightFillIcon = (props) => {
  return GenIcon(arrowRightFill)(props);
};
var ArrowRightLineIcon = (props) => {
  return GenIcon(arrowRightLine)(props);
};
var ArrowRightSLineIcon = (props) => {
  return GenIcon(arrowRightSLine)(props);
};
var ArrowRightUpFillIcon = (props) => {
  return GenIcon(arrowRightUpFill)(props);
};
var ArrowRightUpLineIcon = (props) => {
  return GenIcon(arrowRightUpLine)(props);
};
var ArrowUpCircleFillIcon = (props) => {
  return GenIcon(arrowUpCircleFill)(props);
};
var ArrowUpCircleLineIcon = (props) => {
  return GenIcon(arrowUpCircleLine)(props);
};
var ArrowUpDownFillIcon = (props) => {
  return GenIcon(arrowUpDownFill)(props);
};
var ArrowUpDownLineIcon = (props) => {
  return GenIcon(arrowUpDownLine)(props);
};
var ArrowUpFillIcon = (props) => {
  return GenIcon(arrowUpFill)(props);
};
var ArrowUpLineIcon = (props) => {
  return GenIcon(arrowUpLine)(props);
};
var ArrowUpSLineIcon = (props) => {
  return GenIcon(arrowUpSLine)(props);
};
var Artboard2FillIcon = (props) => {
  return GenIcon(artboard2Fill)(props);
};
var Artboard2LineIcon = (props) => {
  return GenIcon(artboard2Line)(props);
};
var ArtboardFillIcon = (props) => {
  return GenIcon(artboardFill)(props);
};
var ArtboardLineIcon = (props) => {
  return GenIcon(artboardLine)(props);
};
var ArticleFillIcon = (props) => {
  return GenIcon(articleFill)(props);
};
var ArticleLineIcon = (props) => {
  return GenIcon(articleLine)(props);
};
var AspectRatioFillIcon = (props) => {
  return GenIcon(aspectRatioFill)(props);
};
var AspectRatioLineIcon = (props) => {
  return GenIcon(aspectRatioLine)(props);
};
var AtFillIcon = (props) => {
  return GenIcon(atFill)(props);
};
var AtLineIcon = (props) => {
  return GenIcon(atLine)(props);
};
var AttachmentFillIcon = (props) => {
  return GenIcon(attachmentFill)(props);
};
var AttachmentLineIcon = (props) => {
  return GenIcon(attachmentLine)(props);
};
var AuctionFillIcon = (props) => {
  return GenIcon(auctionFill)(props);
};
var AuctionLineIcon = (props) => {
  return GenIcon(auctionLine)(props);
};
var AwardFillIcon = (props) => {
  return GenIcon(awardFill)(props);
};
var AwardLineIcon = (props) => {
  return GenIcon(awardLine)(props);
};
var BaiduFillIcon = (props) => {
  return GenIcon(baiduFill)(props);
};
var BaiduLineIcon = (props) => {
  return GenIcon(baiduLine)(props);
};
var BallPenFillIcon = (props) => {
  return GenIcon(ballPenFill)(props);
};
var BallPenLineIcon = (props) => {
  return GenIcon(ballPenLine)(props);
};
var BankCard2FillIcon = (props) => {
  return GenIcon(bankCard2Fill)(props);
};
var BankCard2LineIcon = (props) => {
  return GenIcon(bankCard2Line)(props);
};
var BankCardFillIcon = (props) => {
  return GenIcon(bankCardFill)(props);
};
var BankCardLineIcon = (props) => {
  return GenIcon(bankCardLine)(props);
};
var BankFillIcon = (props) => {
  return GenIcon(bankFill)(props);
};
var BankLineIcon = (props) => {
  return GenIcon(bankLine)(props);
};
var BarChart2FillIcon = (props) => {
  return GenIcon(barChart2Fill)(props);
};
var BarChart2LineIcon = (props) => {
  return GenIcon(barChart2Line)(props);
};
var BarChartBoxFillIcon = (props) => {
  return GenIcon(barChartBoxFill)(props);
};
var BarChartBoxLineIcon = (props) => {
  return GenIcon(barChartBoxLine)(props);
};
var BarChartFillIcon = (props) => {
  return GenIcon(barChartFill)(props);
};
var BarChartGroupedFillIcon = (props) => {
  return GenIcon(barChartGroupedFill)(props);
};
var BarChartGroupedLineIcon = (props) => {
  return GenIcon(barChartGroupedLine)(props);
};
var BarChartHorizontalFillIcon = (props) => {
  return GenIcon(barChartHorizontalFill)(props);
};
var BarChartHorizontalLineIcon = (props) => {
  return GenIcon(barChartHorizontalLine)(props);
};
var BarChartLineIcon = (props) => {
  return GenIcon(barChartLine)(props);
};
var BarcodeBoxFillIcon = (props) => {
  return GenIcon(barcodeBoxFill)(props);
};
var BarcodeBoxLineIcon = (props) => {
  return GenIcon(barcodeBoxLine)(props);
};
var BarcodeFillIcon = (props) => {
  return GenIcon(barcodeFill)(props);
};
var BarcodeLineIcon = (props) => {
  return GenIcon(barcodeLine)(props);
};
var BarricadeFillIcon = (props) => {
  return GenIcon(barricadeFill)(props);
};
var BarricadeLineIcon = (props) => {
  return GenIcon(barricadeLine)(props);
};
var BaseStationFillIcon = (props) => {
  return GenIcon(baseStationFill)(props);
};
var BaseStationLineIcon = (props) => {
  return GenIcon(baseStationLine)(props);
};
var BasketballFillIcon = (props) => {
  return GenIcon(basketballFill)(props);
};
var BasketballLineIcon = (props) => {
  return GenIcon(basketballLine)(props);
};
var Battery2ChargeFillIcon = (props) => {
  return GenIcon(battery2ChargeFill)(props);
};
var Battery2ChargeLineIcon = (props) => {
  return GenIcon(battery2ChargeLine)(props);
};
var Battery2FillIcon = (props) => {
  return GenIcon(battery2Fill)(props);
};
var Battery2LineIcon = (props) => {
  return GenIcon(battery2Line)(props);
};
var BatteryChargeFillIcon = (props) => {
  return GenIcon(batteryChargeFill)(props);
};
var BatteryChargeLineIcon = (props) => {
  return GenIcon(batteryChargeLine)(props);
};
var BatteryFillIcon = (props) => {
  return GenIcon(batteryFill)(props);
};
var BatteryLineIcon = (props) => {
  return GenIcon(batteryLine)(props);
};
var BatteryLowFillIcon = (props) => {
  return GenIcon(batteryLowFill)(props);
};
var BatteryLowLineIcon = (props) => {
  return GenIcon(batteryLowLine)(props);
};
var BatterySaverFillIcon = (props) => {
  return GenIcon(batterySaverFill)(props);
};
var BatterySaverLineIcon = (props) => {
  return GenIcon(batterySaverLine)(props);
};
var BatteryShareFillIcon = (props) => {
  return GenIcon(batteryShareFill)(props);
};
var BatteryShareLineIcon = (props) => {
  return GenIcon(batteryShareLine)(props);
};
var BearSmileFillIcon = (props) => {
  return GenIcon(bearSmileFill)(props);
};
var BearSmileLineIcon = (props) => {
  return GenIcon(bearSmileLine)(props);
};
var BehanceFillIcon = (props) => {
  return GenIcon(behanceFill)(props);
};
var BehanceLineIcon = (props) => {
  return GenIcon(behanceLine)(props);
};
var BellFillIcon = (props) => {
  return GenIcon(bellFill)(props);
};
var BellLineIcon = (props) => {
  return GenIcon(bellLine)(props);
};
var BikeFillIcon = (props) => {
  return GenIcon(bikeFill)(props);
};
var BikeLineIcon = (props) => {
  return GenIcon(bikeLine)(props);
};
var BilibiliFillIcon = (props) => {
  return GenIcon(bilibiliFill)(props);
};
var BilibiliLineIcon = (props) => {
  return GenIcon(bilibiliLine)(props);
};
var BillFillIcon = (props) => {
  return GenIcon(billFill)(props);
};
var BillLineIcon = (props) => {
  return GenIcon(billLine)(props);
};
var BilliardsFillIcon = (props) => {
  return GenIcon(billiardsFill)(props);
};
var BilliardsLineIcon = (props) => {
  return GenIcon(billiardsLine)(props);
};
var BitCoinFillIcon = (props) => {
  return GenIcon(bitCoinFill)(props);
};
var BitCoinLineIcon = (props) => {
  return GenIcon(bitCoinLine)(props);
};
var BlazeFillIcon = (props) => {
  return GenIcon(blazeFill)(props);
};
var BlazeLineIcon = (props) => {
  return GenIcon(blazeLine)(props);
};
var BluetoothConnectFillIcon = (props) => {
  return GenIcon(bluetoothConnectFill)(props);
};
var BluetoothConnectLineIcon = (props) => {
  return GenIcon(bluetoothConnectLine)(props);
};
var BluetoothFillIcon = (props) => {
  return GenIcon(bluetoothFill)(props);
};
var BluetoothLineIcon = (props) => {
  return GenIcon(bluetoothLine)(props);
};
var BlurOffFillIcon = (props) => {
  return GenIcon(blurOffFill)(props);
};
var BlurOffLineIcon = (props) => {
  return GenIcon(blurOffLine)(props);
};
var BodyScanFillIcon = (props) => {
  return GenIcon(bodyScanFill)(props);
};
var BodyScanLineIcon = (props) => {
  return GenIcon(bodyScanLine)(props);
};
var Book2FillIcon = (props) => {
  return GenIcon(book2Fill)(props);
};
var Book2LineIcon = (props) => {
  return GenIcon(book2Line)(props);
};
var Book3FillIcon = (props) => {
  return GenIcon(book3Fill)(props);
};
var Book3LineIcon = (props) => {
  return GenIcon(book3Line)(props);
};
var BookFillIcon = (props) => {
  return GenIcon(bookFill)(props);
};
var BookLineIcon = (props) => {
  return GenIcon(bookLine)(props);
};
var BookMarkFillIcon = (props) => {
  return GenIcon(bookMarkFill)(props);
};
var BookMarkLineIcon = (props) => {
  return GenIcon(bookMarkLine)(props);
};
var BookOpenFillIcon = (props) => {
  return GenIcon(bookOpenFill)(props);
};
var BookOpenLineIcon = (props) => {
  return GenIcon(bookOpenLine)(props);
};
var BookReadFillIcon = (props) => {
  return GenIcon(bookReadFill)(props);
};
var BookReadLineIcon = (props) => {
  return GenIcon(bookReadLine)(props);
};
var BookletFillIcon = (props) => {
  return GenIcon(bookletFill)(props);
};
var BookletLineIcon = (props) => {
  return GenIcon(bookletLine)(props);
};
var Bookmark2FillIcon = (props) => {
  return GenIcon(bookmark2Fill)(props);
};
var Bookmark2LineIcon = (props) => {
  return GenIcon(bookmark2Line)(props);
};
var Bookmark3FillIcon = (props) => {
  return GenIcon(bookmark3Fill)(props);
};
var Bookmark3LineIcon = (props) => {
  return GenIcon(bookmark3Line)(props);
};
var BookmarkFillIcon = (props) => {
  return GenIcon(bookmarkFill)(props);
};
var BookmarkLineIcon = (props) => {
  return GenIcon(bookmarkLine)(props);
};
var BoxingFillIcon = (props) => {
  return GenIcon(boxingFill)(props);
};
var BoxingLineIcon = (props) => {
  return GenIcon(boxingLine)(props);
};
var BracesFillIcon = (props) => {
  return GenIcon(bracesFill)(props);
};
var BracketsFillIcon = (props) => {
  return GenIcon(bracketsFill)(props);
};
var BracketsLineIcon = (props) => {
  return GenIcon(bracketsLine)(props);
};
var Briefcase2FillIcon = (props) => {
  return GenIcon(briefcase2Fill)(props);
};
var Briefcase2LineIcon = (props) => {
  return GenIcon(briefcase2Line)(props);
};
var Briefcase3FillIcon = (props) => {
  return GenIcon(briefcase3Fill)(props);
};
var Briefcase3LineIcon = (props) => {
  return GenIcon(briefcase3Line)(props);
};
var Briefcase4FillIcon = (props) => {
  return GenIcon(briefcase4Fill)(props);
};
var Briefcase4LineIcon = (props) => {
  return GenIcon(briefcase4Line)(props);
};
var Briefcase5FillIcon = (props) => {
  return GenIcon(briefcase5Fill)(props);
};
var Briefcase5LineIcon = (props) => {
  return GenIcon(briefcase5Line)(props);
};
var BriefcaseFillIcon = (props) => {
  return GenIcon(briefcaseFill)(props);
};
var BriefcaseLineIcon = (props) => {
  return GenIcon(briefcaseLine)(props);
};
var BroadcastFillIcon = (props) => {
  return GenIcon(broadcastFill)(props);
};
var BroadcastLineIcon = (props) => {
  return GenIcon(broadcastLine)(props);
};
var Brush2FillIcon = (props) => {
  return GenIcon(brush2Fill)(props);
};
var Brush2LineIcon = (props) => {
  return GenIcon(brush2Line)(props);
};
var Brush3FillIcon = (props) => {
  return GenIcon(brush3Fill)(props);
};
var Brush3LineIcon = (props) => {
  return GenIcon(brush3Line)(props);
};
var Brush4FillIcon = (props) => {
  return GenIcon(brush4Fill)(props);
};
var Brush4LineIcon = (props) => {
  return GenIcon(brush4Line)(props);
};
var BrushFillIcon = (props) => {
  return GenIcon(brushFill)(props);
};
var BrushLineIcon = (props) => {
  return GenIcon(brushLine)(props);
};
var BubbleChartFillIcon = (props) => {
  return GenIcon(bubbleChartFill)(props);
};
var BubbleChartLineIcon = (props) => {
  return GenIcon(bubbleChartLine)(props);
};
var Bug2FillIcon = (props) => {
  return GenIcon(bug2Fill)(props);
};
var Bug2LineIcon = (props) => {
  return GenIcon(bug2Line)(props);
};
var BugFillIcon = (props) => {
  return GenIcon(bugFill)(props);
};
var BugLineIcon = (props) => {
  return GenIcon(bugLine)(props);
};
var Building2FillIcon = (props) => {
  return GenIcon(building2Fill)(props);
};
var Building2LineIcon = (props) => {
  return GenIcon(building2Line)(props);
};
var Building3FillIcon = (props) => {
  return GenIcon(building3Fill)(props);
};
var Building3LineIcon = (props) => {
  return GenIcon(building3Line)(props);
};
var Building4FillIcon = (props) => {
  return GenIcon(building4Fill)(props);
};
var Building4LineIcon = (props) => {
  return GenIcon(building4Line)(props);
};
var BuildingFillIcon = (props) => {
  return GenIcon(buildingFill)(props);
};
var BuildingLineIcon = (props) => {
  return GenIcon(buildingLine)(props);
};
var Bus2FillIcon = (props) => {
  return GenIcon(bus2Fill)(props);
};
var Bus2LineIcon = (props) => {
  return GenIcon(bus2Line)(props);
};
var BusFillIcon = (props) => {
  return GenIcon(busFill)(props);
};
var BusLineIcon = (props) => {
  return GenIcon(busLine)(props);
};
var BusWifiFillIcon = (props) => {
  return GenIcon(busWifiFill)(props);
};
var BusWifiLineIcon = (props) => {
  return GenIcon(busWifiLine)(props);
};
var CactusFillIcon = (props) => {
  return GenIcon(cactusFill)(props);
};
var CactusLineIcon = (props) => {
  return GenIcon(cactusLine)(props);
};
var Cake2FillIcon = (props) => {
  return GenIcon(cake2Fill)(props);
};
var Cake2LineIcon = (props) => {
  return GenIcon(cake2Line)(props);
};
var Cake3FillIcon = (props) => {
  return GenIcon(cake3Fill)(props);
};
var Cake3LineIcon = (props) => {
  return GenIcon(cake3Line)(props);
};
var CakeFillIcon = (props) => {
  return GenIcon(cakeFill)(props);
};
var CakeLineIcon = (props) => {
  return GenIcon(cakeLine)(props);
};
var CalculatorFillIcon = (props) => {
  return GenIcon(calculatorFill)(props);
};
var CalculatorLineIcon = (props) => {
  return GenIcon(calculatorLine)(props);
};
var Calendar2FillIcon = (props) => {
  return GenIcon(calendar2Fill)(props);
};
var Calendar2LineIcon = (props) => {
  return GenIcon(calendar2Line)(props);
};
var CalendarCheckFillIcon = (props) => {
  return GenIcon(calendarCheckFill)(props);
};
var CalendarCheckLineIcon = (props) => {
  return GenIcon(calendarCheckLine)(props);
};
var CalendarEventFillIcon = (props) => {
  return GenIcon(calendarEventFill)(props);
};
var CalendarEventLineIcon = (props) => {
  return GenIcon(calendarEventLine)(props);
};
var CalendarFillIcon = (props) => {
  return GenIcon(calendarFill)(props);
};
var CalendarLineIcon = (props) => {
  return GenIcon(calendarLine)(props);
};
var CalendarTodoFillIcon = (props) => {
  return GenIcon(calendarTodoFill)(props);
};
var CalendarTodoLineIcon = (props) => {
  return GenIcon(calendarTodoLine)(props);
};
var Camera2FillIcon = (props) => {
  return GenIcon(camera2Fill)(props);
};
var Camera2LineIcon = (props) => {
  return GenIcon(camera2Line)(props);
};
var Camera3FillIcon = (props) => {
  return GenIcon(camera3Fill)(props);
};
var Camera3LineIcon = (props) => {
  return GenIcon(camera3Line)(props);
};
var CameraFillIcon = (props) => {
  return GenIcon(cameraFill)(props);
};
var CameraLensFillIcon = (props) => {
  return GenIcon(cameraLensFill)(props);
};
var CameraLensLineIcon = (props) => {
  return GenIcon(cameraLensLine)(props);
};
var CameraLineIcon = (props) => {
  return GenIcon(cameraLine)(props);
};
var CameraOffFillIcon = (props) => {
  return GenIcon(cameraOffFill)(props);
};
var CameraOffLineIcon = (props) => {
  return GenIcon(cameraOffLine)(props);
};
var CameraSwitchFillIcon = (props) => {
  return GenIcon(cameraSwitchFill)(props);
};
var CameraSwitchLineIcon = (props) => {
  return GenIcon(cameraSwitchLine)(props);
};
var CapsuleFillIcon = (props) => {
  return GenIcon(capsuleFill)(props);
};
var CapsuleLineIcon = (props) => {
  return GenIcon(capsuleLine)(props);
};
var CarFillIcon = (props) => {
  return GenIcon(carFill)(props);
};
var CarLineIcon = (props) => {
  return GenIcon(carLine)(props);
};
var CarWashingFillIcon = (props) => {
  return GenIcon(carWashingFill)(props);
};
var CarWashingLineIcon = (props) => {
  return GenIcon(carWashingLine)(props);
};
var CaravanFillIcon = (props) => {
  return GenIcon(caravanFill)(props);
};
var CaravanLineIcon = (props) => {
  return GenIcon(caravanLine)(props);
};
var CastFillIcon = (props) => {
  return GenIcon(castFill)(props);
};
var CastLineIcon = (props) => {
  return GenIcon(castLine)(props);
};
var CellphoneFillIcon = (props) => {
  return GenIcon(cellphoneFill)(props);
};
var CellphoneLineIcon = (props) => {
  return GenIcon(cellphoneLine)(props);
};
var CelsiusFillIcon = (props) => {
  return GenIcon(celsiusFill)(props);
};
var CelsiusLineIcon = (props) => {
  return GenIcon(celsiusLine)(props);
};
var CentosFillIcon = (props) => {
  return GenIcon(centosFill)(props);
};
var CentosLineIcon = (props) => {
  return GenIcon(centosLine)(props);
};
var CharacterRecognitionFillIcon = (props) => {
  return GenIcon(characterRecognitionFill)(props);
};
var CharacterRecognitionLineIcon = (props) => {
  return GenIcon(characterRecognitionLine)(props);
};
var ChargingPile2FillIcon = (props) => {
  return GenIcon(chargingPile2Fill)(props);
};
var ChargingPile2LineIcon = (props) => {
  return GenIcon(chargingPile2Line)(props);
};
var ChargingPileFillIcon = (props) => {
  return GenIcon(chargingPileFill)(props);
};
var ChargingPileLineIcon = (props) => {
  return GenIcon(chargingPileLine)(props);
};
var Chat1FillIcon = (props) => {
  return GenIcon(chat1Fill)(props);
};
var Chat1LineIcon = (props) => {
  return GenIcon(chat1Line)(props);
};
var Chat2FillIcon = (props) => {
  return GenIcon(chat2Fill)(props);
};
var Chat2LineIcon = (props) => {
  return GenIcon(chat2Line)(props);
};
var Chat3FillIcon = (props) => {
  return GenIcon(chat3Fill)(props);
};
var Chat3LineIcon = (props) => {
  return GenIcon(chat3Line)(props);
};
var Chat4FillIcon = (props) => {
  return GenIcon(chat4Fill)(props);
};
var Chat4LineIcon = (props) => {
  return GenIcon(chat4Line)(props);
};
var ChatCheckFillIcon = (props) => {
  return GenIcon(chatCheckFill)(props);
};
var ChatCheckLineIcon = (props) => {
  return GenIcon(chatCheckLine)(props);
};
var ChatDeleteFillIcon = (props) => {
  return GenIcon(chatDeleteFill)(props);
};
var ChatDeleteLineIcon = (props) => {
  return GenIcon(chatDeleteLine)(props);
};
var ChatDownloadFillIcon = (props) => {
  return GenIcon(chatDownloadFill)(props);
};
var ChatDownloadLineIcon = (props) => {
  return GenIcon(chatDownloadLine)(props);
};
var ChatFollowUpFillIcon = (props) => {
  return GenIcon(chatFollowUpFill)(props);
};
var ChatFollowUpLineIcon = (props) => {
  return GenIcon(chatFollowUpLine)(props);
};
var ChatForwardFillIcon = (props) => {
  return GenIcon(chatForwardFill)(props);
};
var ChatForwardLineIcon = (props) => {
  return GenIcon(chatForwardLine)(props);
};
var ChatHeartFillIcon = (props) => {
  return GenIcon(chatHeartFill)(props);
};
var ChatHeartLineIcon = (props) => {
  return GenIcon(chatHeartLine)(props);
};
var ChatHistoryFillIcon = (props) => {
  return GenIcon(chatHistoryFill)(props);
};
var ChatHistoryLineIcon = (props) => {
  return GenIcon(chatHistoryLine)(props);
};
var ChatNewFillIcon = (props) => {
  return GenIcon(chatNewFill)(props);
};
var ChatOffFillIcon = (props) => {
  return GenIcon(chatOffFill)(props);
};
var ChatOffLineIcon = (props) => {
  return GenIcon(chatOffLine)(props);
};
var ChatPollFillIcon = (props) => {
  return GenIcon(chatPollFill)(props);
};
var ChatPollLineIcon = (props) => {
  return GenIcon(chatPollLine)(props);
};
var ChatPrivateFillIcon = (props) => {
  return GenIcon(chatPrivateFill)(props);
};
var ChatPrivateLineIcon = (props) => {
  return GenIcon(chatPrivateLine)(props);
};
var ChatQuoteFillIcon = (props) => {
  return GenIcon(chatQuoteFill)(props);
};
var ChatQuoteLineIcon = (props) => {
  return GenIcon(chatQuoteLine)(props);
};
var ChatSettingsFillIcon = (props) => {
  return GenIcon(chatSettingsFill)(props);
};
var ChatSettingsLineIcon = (props) => {
  return GenIcon(chatSettingsLine)(props);
};
var ChatSmile2FillIcon = (props) => {
  return GenIcon(chatSmile2Fill)(props);
};
var ChatSmile2LineIcon = (props) => {
  return GenIcon(chatSmile2Line)(props);
};
var ChatSmile3FillIcon = (props) => {
  return GenIcon(chatSmile3Fill)(props);
};
var ChatSmile3LineIcon = (props) => {
  return GenIcon(chatSmile3Line)(props);
};
var ChatSmileFillIcon = (props) => {
  return GenIcon(chatSmileFill)(props);
};
var ChatSmileLineIcon = (props) => {
  return GenIcon(chatSmileLine)(props);
};
var ChatUploadFillIcon = (props) => {
  return GenIcon(chatUploadFill)(props);
};
var ChatUploadLineIcon = (props) => {
  return GenIcon(chatUploadLine)(props);
};
var ChatVoiceFillIcon = (props) => {
  return GenIcon(chatVoiceFill)(props);
};
var ChatVoiceLineIcon = (props) => {
  return GenIcon(chatVoiceLine)(props);
};
var CheckDoubleFillIcon = (props) => {
  return GenIcon(checkDoubleFill)(props);
};
var CheckDoubleLineIcon = (props) => {
  return GenIcon(checkDoubleLine)(props);
};
var CheckFillIcon = (props) => {
  return GenIcon(checkFill)(props);
};
var CheckLineIcon = (props) => {
  return GenIcon(checkLine)(props);
};
var CheckboxBlankCircleFillIcon = (props) => {
  return GenIcon(checkboxBlankCircleFill)(props);
};
var CheckboxBlankCircleLineIcon = (props) => {
  return GenIcon(checkboxBlankCircleLine)(props);
};
var CheckboxBlankFillIcon = (props) => {
  return GenIcon(checkboxBlankFill)(props);
};
var CheckboxBlankLineIcon = (props) => {
  return GenIcon(checkboxBlankLine)(props);
};
var CheckboxCircleFillIcon = (props) => {
  return GenIcon(checkboxCircleFill)(props);
};
var CheckboxFillIcon = (props) => {
  return GenIcon(checkboxFill)(props);
};
var CheckboxIndeterminateFillIcon = (props) => {
  return GenIcon(checkboxIndeterminateFill)(props);
};
var CheckboxIndeterminateLineIcon = (props) => {
  return GenIcon(checkboxIndeterminateLine)(props);
};
var CheckboxLineIcon = (props) => {
  return GenIcon(checkboxLine)(props);
};
var CheckboxMultipleBlankFillIcon = (props) => {
  return GenIcon(checkboxMultipleBlankFill)(props);
};
var CheckboxMultipleBlankLineIcon = (props) => {
  return GenIcon(checkboxMultipleBlankLine)(props);
};
var CheckboxMultipleFillIcon = (props) => {
  return GenIcon(checkboxMultipleFill)(props);
};
var ChinaRailwayFillIcon = (props) => {
  return GenIcon(chinaRailwayFill)(props);
};
var ChinaRailwayLineIcon = (props) => {
  return GenIcon(chinaRailwayLine)(props);
};
var ChromeFillIcon = (props) => {
  return GenIcon(chromeFill)(props);
};
var ChromeLineIcon = (props) => {
  return GenIcon(chromeLine)(props);
};
var ClapperboardFillIcon = (props) => {
  return GenIcon(clapperboardFill)(props);
};
var ClapperboardLineIcon = (props) => {
  return GenIcon(clapperboardLine)(props);
};
var Clockwise2FillIcon = (props) => {
  return GenIcon(clockwise2Fill)(props);
};
var Clockwise2LineIcon = (props) => {
  return GenIcon(clockwise2Line)(props);
};
var ClockwiseFillIcon = (props) => {
  return GenIcon(clockwiseFill)(props);
};
var ClockwiseLineIcon = (props) => {
  return GenIcon(clockwiseLine)(props);
};
var CloseCircleFillIcon = (props) => {
  return GenIcon(closeCircleFill)(props);
};
var ClosedCaptioningFillIcon = (props) => {
  return GenIcon(closedCaptioningFill)(props);
};
var ClosedCaptioningLineIcon = (props) => {
  return GenIcon(closedCaptioningLine)(props);
};
var CloudFillIcon = (props) => {
  return GenIcon(cloudFill)(props);
};
var CloudLineIcon = (props) => {
  return GenIcon(cloudLine)(props);
};
var CloudOffFillIcon = (props) => {
  return GenIcon(cloudOffFill)(props);
};
var CloudOffLineIcon = (props) => {
  return GenIcon(cloudOffLine)(props);
};
var CloudWindyFillIcon = (props) => {
  return GenIcon(cloudWindyFill)(props);
};
var CloudWindyLineIcon = (props) => {
  return GenIcon(cloudWindyLine)(props);
};
var Cloudy2FillIcon = (props) => {
  return GenIcon(cloudy2Fill)(props);
};
var Cloudy2LineIcon = (props) => {
  return GenIcon(cloudy2Line)(props);
};
var CloudyFillIcon = (props) => {
  return GenIcon(cloudyFill)(props);
};
var CloudyLineIcon = (props) => {
  return GenIcon(cloudyLine)(props);
};
var CodeBoxFillIcon = (props) => {
  return GenIcon(codeBoxFill)(props);
};
var CodeBoxLineIcon = (props) => {
  return GenIcon(codeBoxLine)(props);
};
var CodeFillIcon = (props) => {
  return GenIcon(codeFill)(props);
};
var CodeSFillIcon = (props) => {
  return GenIcon(codeSFill)(props);
};
var CodeSLineIcon = (props) => {
  return GenIcon(codeSLine)(props);
};
var CodeSSlashFillIcon = (props) => {
  return GenIcon(codeSSlashFill)(props);
};
var CodeSSlashLineIcon = (props) => {
  return GenIcon(codeSSlashLine)(props);
};
var CodepenFillIcon = (props) => {
  return GenIcon(codepenFill)(props);
};
var CodepenLineIcon = (props) => {
  return GenIcon(codepenLine)(props);
};
var CoinFillIcon = (props) => {
  return GenIcon(coinFill)(props);
};
var CoinLineIcon = (props) => {
  return GenIcon(coinLine)(props);
};
var CoinsFillIcon = (props) => {
  return GenIcon(coinsFill)(props);
};
var CoinsLineIcon = (props) => {
  return GenIcon(coinsLine)(props);
};
var CollageFillIcon = (props) => {
  return GenIcon(collageFill)(props);
};
var CollageLineIcon = (props) => {
  return GenIcon(collageLine)(props);
};
var CommandFillIcon = (props) => {
  return GenIcon(commandFill)(props);
};
var CommandLineIcon = (props) => {
  return GenIcon(commandLine)(props);
};
var CommunityFillIcon = (props) => {
  return GenIcon(communityFill)(props);
};
var CommunityLineIcon = (props) => {
  return GenIcon(communityLine)(props);
};
var Compass2FillIcon = (props) => {
  return GenIcon(compass2Fill)(props);
};
var Compass2LineIcon = (props) => {
  return GenIcon(compass2Line)(props);
};
var Compass3FillIcon = (props) => {
  return GenIcon(compass3Fill)(props);
};
var Compass3LineIcon = (props) => {
  return GenIcon(compass3Line)(props);
};
var Compass4FillIcon = (props) => {
  return GenIcon(compass4Fill)(props);
};
var Compass4LineIcon = (props) => {
  return GenIcon(compass4Line)(props);
};
var CompassDiscoverFillIcon = (props) => {
  return GenIcon(compassDiscoverFill)(props);
};
var CompassDiscoverLineIcon = (props) => {
  return GenIcon(compassDiscoverLine)(props);
};
var CompassFillIcon = (props) => {
  return GenIcon(compassFill)(props);
};
var CompassLineIcon = (props) => {
  return GenIcon(compassLine)(props);
};
var Compasses2FillIcon = (props) => {
  return GenIcon(compasses2Fill)(props);
};
var Compasses2LineIcon = (props) => {
  return GenIcon(compasses2Line)(props);
};
var CompassesFillIcon = (props) => {
  return GenIcon(compassesFill)(props);
};
var CompassesLineIcon = (props) => {
  return GenIcon(compassesLine)(props);
};
var ComputerFillIcon = (props) => {
  return GenIcon(computerFill)(props);
};
var ComputerLineIcon = (props) => {
  return GenIcon(computerLine)(props);
};
var ContactsBook2FillIcon = (props) => {
  return GenIcon(contactsBook2Fill)(props);
};
var ContactsBook2LineIcon = (props) => {
  return GenIcon(contactsBook2Line)(props);
};
var ContactsBookFillIcon = (props) => {
  return GenIcon(contactsBookFill)(props);
};
var ContactsBookLineIcon = (props) => {
  return GenIcon(contactsBookLine)(props);
};
var ContactsBookUploadFillIcon = (props) => {
  return GenIcon(contactsBookUploadFill)(props);
};
var ContactsBookUploadLineIcon = (props) => {
  return GenIcon(contactsBookUploadLine)(props);
};
var ContactsFillIcon = (props) => {
  return GenIcon(contactsFill)(props);
};
var ContactsLineIcon = (props) => {
  return GenIcon(contactsLine)(props);
};
var Contrast2FillIcon = (props) => {
  return GenIcon(contrast2Fill)(props);
};
var Contrast2LineIcon = (props) => {
  return GenIcon(contrast2Line)(props);
};
var ContrastDrop2FillIcon = (props) => {
  return GenIcon(contrastDrop2Fill)(props);
};
var ContrastDrop2LineIcon = (props) => {
  return GenIcon(contrastDrop2Line)(props);
};
var ContrastDropFillIcon = (props) => {
  return GenIcon(contrastDropFill)(props);
};
var ContrastDropLineIcon = (props) => {
  return GenIcon(contrastDropLine)(props);
};
var ContrastFillIcon = (props) => {
  return GenIcon(contrastFill)(props);
};
var ContrastLineIcon = (props) => {
  return GenIcon(contrastLine)(props);
};
var CopperCoinFillIcon = (props) => {
  return GenIcon(copperCoinFill)(props);
};
var CopperCoinLineIcon = (props) => {
  return GenIcon(copperCoinLine)(props);
};
var CopperDiamondFillIcon = (props) => {
  return GenIcon(copperDiamondFill)(props);
};
var CopperDiamondLineIcon = (props) => {
  return GenIcon(copperDiamondLine)(props);
};
var CopyleftFillIcon = (props) => {
  return GenIcon(copyleftFill)(props);
};
var CopyleftLineIcon = (props) => {
  return GenIcon(copyleftLine)(props);
};
var CopyrightFillIcon = (props) => {
  return GenIcon(copyrightFill)(props);
};
var CopyrightLineIcon = (props) => {
  return GenIcon(copyrightLine)(props);
};
var CoreosFillIcon = (props) => {
  return GenIcon(coreosFill)(props);
};
var CoreosLineIcon = (props) => {
  return GenIcon(coreosLine)(props);
};
var Coupon2FillIcon = (props) => {
  return GenIcon(coupon2Fill)(props);
};
var Coupon2LineIcon = (props) => {
  return GenIcon(coupon2Line)(props);
};
var Coupon3FillIcon = (props) => {
  return GenIcon(coupon3Fill)(props);
};
var Coupon3LineIcon = (props) => {
  return GenIcon(coupon3Line)(props);
};
var Coupon4FillIcon = (props) => {
  return GenIcon(coupon4Fill)(props);
};
var Coupon4LineIcon = (props) => {
  return GenIcon(coupon4Line)(props);
};
var Coupon5FillIcon = (props) => {
  return GenIcon(coupon5Fill)(props);
};
var Coupon5LineIcon = (props) => {
  return GenIcon(coupon5Line)(props);
};
var CouponFillIcon = (props) => {
  return GenIcon(couponFill)(props);
};
var CouponLineIcon = (props) => {
  return GenIcon(couponLine)(props);
};
var CpuFillIcon = (props) => {
  return GenIcon(cpuFill)(props);
};
var CpuLineIcon = (props) => {
  return GenIcon(cpuLine)(props);
};
var CreativeCommonsByFillIcon = (props) => {
  return GenIcon(creativeCommonsByFill)(props);
};
var CreativeCommonsByLineIcon = (props) => {
  return GenIcon(creativeCommonsByLine)(props);
};
var CreativeCommonsFillIcon = (props) => {
  return GenIcon(creativeCommonsFill)(props);
};
var CreativeCommonsLineIcon = (props) => {
  return GenIcon(creativeCommonsLine)(props);
};
var CreativeCommonsNcFillIcon = (props) => {
  return GenIcon(creativeCommonsNcFill)(props);
};
var CreativeCommonsNcLineIcon = (props) => {
  return GenIcon(creativeCommonsNcLine)(props);
};
var CreativeCommonsNdFillIcon = (props) => {
  return GenIcon(creativeCommonsNdFill)(props);
};
var CreativeCommonsNdLineIcon = (props) => {
  return GenIcon(creativeCommonsNdLine)(props);
};
var CreativeCommonsSaFillIcon = (props) => {
  return GenIcon(creativeCommonsSaFill)(props);
};
var CreativeCommonsSaLineIcon = (props) => {
  return GenIcon(creativeCommonsSaLine)(props);
};
var CreativeCommonsZeroFillIcon = (props) => {
  return GenIcon(creativeCommonsZeroFill)(props);
};
var CreativeCommonsZeroLineIcon = (props) => {
  return GenIcon(creativeCommonsZeroLine)(props);
};
var CriminalFillIcon = (props) => {
  return GenIcon(criminalFill)(props);
};
var CriminalLineIcon = (props) => {
  return GenIcon(criminalLine)(props);
};
var Crop2FillIcon = (props) => {
  return GenIcon(crop2Fill)(props);
};
var Crop2LineIcon = (props) => {
  return GenIcon(crop2Line)(props);
};
var CropFillIcon = (props) => {
  return GenIcon(cropFill)(props);
};
var CropLineIcon = (props) => {
  return GenIcon(cropLine)(props);
};
var Css3FillIcon = (props) => {
  return GenIcon(css3Fill)(props);
};
var Css3LineIcon = (props) => {
  return GenIcon(css3Line)(props);
};
var CupFillIcon = (props) => {
  return GenIcon(cupFill)(props);
};
var CupLineIcon = (props) => {
  return GenIcon(cupLine)(props);
};
var CurrencyFillIcon = (props) => {
  return GenIcon(currencyFill)(props);
};
var CurrencyLineIcon = (props) => {
  return GenIcon(currencyLine)(props);
};
var CursorFillIcon = (props) => {
  return GenIcon(cursorFill)(props);
};
var CursorLineIcon = (props) => {
  return GenIcon(cursorLine)(props);
};
var CustomerService2FillIcon = (props) => {
  return GenIcon(customerService2Fill)(props);
};
var CustomerService2LineIcon = (props) => {
  return GenIcon(customerService2Line)(props);
};
var CustomerServiceFillIcon = (props) => {
  return GenIcon(customerServiceFill)(props);
};
var CustomerServiceLineIcon = (props) => {
  return GenIcon(customerServiceLine)(props);
};
var Dashboard2FillIcon = (props) => {
  return GenIcon(dashboard2Fill)(props);
};
var Dashboard2LineIcon = (props) => {
  return GenIcon(dashboard2Line)(props);
};
var Dashboard3FillIcon = (props) => {
  return GenIcon(dashboard3Fill)(props);
};
var Dashboard3LineIcon = (props) => {
  return GenIcon(dashboard3Line)(props);
};
var DashboardFillIcon = (props) => {
  return GenIcon(dashboardFill)(props);
};
var DashboardLineIcon = (props) => {
  return GenIcon(dashboardLine)(props);
};
var Database2FillIcon = (props) => {
  return GenIcon(database2Fill)(props);
};
var Database2LineIcon = (props) => {
  return GenIcon(database2Line)(props);
};
var DatabaseFillIcon = (props) => {
  return GenIcon(databaseFill)(props);
};
var DatabaseLineIcon = (props) => {
  return GenIcon(databaseLine)(props);
};
var DeleteBack2FillIcon = (props) => {
  return GenIcon(deleteBack2Fill)(props);
};
var DeleteBack2LineIcon = (props) => {
  return GenIcon(deleteBack2Line)(props);
};
var DeleteBackFillIcon = (props) => {
  return GenIcon(deleteBackFill)(props);
};
var DeleteBackLineIcon = (props) => {
  return GenIcon(deleteBackLine)(props);
};
var DeleteBin2FillIcon = (props) => {
  return GenIcon(deleteBin2Fill)(props);
};
var DeleteBin2LineIcon = (props) => {
  return GenIcon(deleteBin2Line)(props);
};
var DeleteBin3FillIcon = (props) => {
  return GenIcon(deleteBin3Fill)(props);
};
var DeleteBin3LineIcon = (props) => {
  return GenIcon(deleteBin3Line)(props);
};
var DeleteBin4FillIcon = (props) => {
  return GenIcon(deleteBin4Fill)(props);
};
var DeleteBin4LineIcon = (props) => {
  return GenIcon(deleteBin4Line)(props);
};
var DeleteBin5FillIcon = (props) => {
  return GenIcon(deleteBin5Fill)(props);
};
var DeleteBin5LineIcon = (props) => {
  return GenIcon(deleteBin5Line)(props);
};
var DeleteBin6FillIcon = (props) => {
  return GenIcon(deleteBin6Fill)(props);
};
var DeleteBin6LineIcon = (props) => {
  return GenIcon(deleteBin6Line)(props);
};
var DeleteBin7FillIcon = (props) => {
  return GenIcon(deleteBin7Fill)(props);
};
var DeleteBin7LineIcon = (props) => {
  return GenIcon(deleteBin7Line)(props);
};
var DeviceFillIcon = (props) => {
  return GenIcon(deviceFill)(props);
};
var DeviceLineIcon = (props) => {
  return GenIcon(deviceLine)(props);
};
var DeviceRecoverFillIcon = (props) => {
  return GenIcon(deviceRecoverFill)(props);
};
var DeviceRecoverLineIcon = (props) => {
  return GenIcon(deviceRecoverLine)(props);
};
var DingdingFillIcon = (props) => {
  return GenIcon(dingdingFill)(props);
};
var DingdingLineIcon = (props) => {
  return GenIcon(dingdingLine)(props);
};
var DirectionFillIcon = (props) => {
  return GenIcon(directionFill)(props);
};
var DirectionLineIcon = (props) => {
  return GenIcon(directionLine)(props);
};
var DiscFillIcon = (props) => {
  return GenIcon(discFill)(props);
};
var DiscLineIcon = (props) => {
  return GenIcon(discLine)(props);
};
var DiscordFillIcon = (props) => {
  return GenIcon(discordFill)(props);
};
var DiscordLineIcon = (props) => {
  return GenIcon(discordLine)(props);
};
var DiscussFillIcon = (props) => {
  return GenIcon(discussFill)(props);
};
var DiscussLineIcon = (props) => {
  return GenIcon(discussLine)(props);
};
var DislikeFillIcon = (props) => {
  return GenIcon(dislikeFill)(props);
};
var DislikeLineIcon = (props) => {
  return GenIcon(dislikeLine)(props);
};
var DisqusFillIcon = (props) => {
  return GenIcon(disqusFill)(props);
};
var DisqusLineIcon = (props) => {
  return GenIcon(disqusLine)(props);
};
var DivideFillIcon = (props) => {
  return GenIcon(divideFill)(props);
};
var DivideLineIcon = (props) => {
  return GenIcon(divideLine)(props);
};
var DonutChartFillIcon = (props) => {
  return GenIcon(donutChartFill)(props);
};
var DonutChartLineIcon = (props) => {
  return GenIcon(donutChartLine)(props);
};
var DoorClosedFillIcon = (props) => {
  return GenIcon(doorClosedFill)(props);
};
var DoorClosedLineIcon = (props) => {
  return GenIcon(doorClosedLine)(props);
};
var DoorFillIcon = (props) => {
  return GenIcon(doorFill)(props);
};
var DoorLineIcon = (props) => {
  return GenIcon(doorLine)(props);
};
var DoorLockBoxFillIcon = (props) => {
  return GenIcon(doorLockBoxFill)(props);
};
var DoorLockBoxLineIcon = (props) => {
  return GenIcon(doorLockBoxLine)(props);
};
var DoorLockFillIcon = (props) => {
  return GenIcon(doorLockFill)(props);
};
var DoorLockLineIcon = (props) => {
  return GenIcon(doorLockLine)(props);
};
var DoorOpenFillIcon = (props) => {
  return GenIcon(doorOpenFill)(props);
};
var DoorOpenLineIcon = (props) => {
  return GenIcon(doorOpenLine)(props);
};
var DossierFillIcon = (props) => {
  return GenIcon(dossierFill)(props);
};
var DossierLineIcon = (props) => {
  return GenIcon(dossierLine)(props);
};
var DoubanFillIcon = (props) => {
  return GenIcon(doubanFill)(props);
};
var DoubanLineIcon = (props) => {
  return GenIcon(doubanLine)(props);
};
var Download2LineIcon = (props) => {
  return GenIcon(download2Line)(props);
};
var DownloadCloud2FillIcon = (props) => {
  return GenIcon(downloadCloud2Fill)(props);
};
var DownloadCloud2LineIcon = (props) => {
  return GenIcon(downloadCloud2Line)(props);
};
var DownloadCloudFillIcon = (props) => {
  return GenIcon(downloadCloudFill)(props);
};
var DownloadCloudLineIcon = (props) => {
  return GenIcon(downloadCloudLine)(props);
};
var DownloadFillIcon = (props) => {
  return GenIcon(downloadFill)(props);
};
var DownloadLineIcon = (props) => {
  return GenIcon(downloadLine)(props);
};
var DraftFillIcon = (props) => {
  return GenIcon(draftFill)(props);
};
var DraftLineIcon = (props) => {
  return GenIcon(draftLine)(props);
};
var DragDropFillIcon = (props) => {
  return GenIcon(dragDropFill)(props);
};
var DragMove2FillIcon = (props) => {
  return GenIcon(dragMove2Fill)(props);
};
var DragMove2LineIcon = (props) => {
  return GenIcon(dragMove2Line)(props);
};
var DragMoveFillIcon = (props) => {
  return GenIcon(dragMoveFill)(props);
};
var DragMoveLineIcon = (props) => {
  return GenIcon(dragMoveLine)(props);
};
var DribbbleFillIcon = (props) => {
  return GenIcon(dribbbleFill)(props);
};
var DribbbleLineIcon = (props) => {
  return GenIcon(dribbbleLine)(props);
};
var DriveFillIcon = (props) => {
  return GenIcon(driveFill)(props);
};
var DriveLineIcon = (props) => {
  return GenIcon(driveLine)(props);
};
var DrizzleFillIcon = (props) => {
  return GenIcon(drizzleFill)(props);
};
var DrizzleLineIcon = (props) => {
  return GenIcon(drizzleLine)(props);
};
var DropFillIcon = (props) => {
  return GenIcon(dropFill)(props);
};
var DropLineIcon = (props) => {
  return GenIcon(dropLine)(props);
};
var DropboxFillIcon = (props) => {
  return GenIcon(dropboxFill)(props);
};
var DropboxLineIcon = (props) => {
  return GenIcon(dropboxLine)(props);
};
var DualSim1FillIcon = (props) => {
  return GenIcon(dualSim1Fill)(props);
};
var DualSim1LineIcon = (props) => {
  return GenIcon(dualSim1Line)(props);
};
var DualSim2FillIcon = (props) => {
  return GenIcon(dualSim2Fill)(props);
};
var DualSim2LineIcon = (props) => {
  return GenIcon(dualSim2Line)(props);
};
var DvFillIcon = (props) => {
  return GenIcon(dvFill)(props);
};
var DvLineIcon = (props) => {
  return GenIcon(dvLine)(props);
};
var DvdFillIcon = (props) => {
  return GenIcon(dvdFill)(props);
};
var DvdLineIcon = (props) => {
  return GenIcon(dvdLine)(props);
};
var EBike2FillIcon = (props) => {
  return GenIcon(eBike2Fill)(props);
};
var EBike2LineIcon = (props) => {
  return GenIcon(eBike2Line)(props);
};
var EBikeFillIcon = (props) => {
  return GenIcon(eBikeFill)(props);
};
var EBikeLineIcon = (props) => {
  return GenIcon(eBikeLine)(props);
};
var EarthFillIcon = (props) => {
  return GenIcon(earthFill)(props);
};
var EarthLineIcon = (props) => {
  return GenIcon(earthLine)(props);
};
var EarthquakeFillIcon = (props) => {
  return GenIcon(earthquakeFill)(props);
};
var EarthquakeLineIcon = (props) => {
  return GenIcon(earthquakeLine)(props);
};
var EdgeFillIcon = (props) => {
  return GenIcon(edgeFill)(props);
};
var EdgeLineIcon = (props) => {
  return GenIcon(edgeLine)(props);
};
var Edit2FillIcon = (props) => {
  return GenIcon(edit2Fill)(props);
};
var Edit2LineIcon = (props) => {
  return GenIcon(edit2Line)(props);
};
var EditBoxFillIcon = (props) => {
  return GenIcon(editBoxFill)(props);
};
var EditBoxLineIcon = (props) => {
  return GenIcon(editBoxLine)(props);
};
var EditCircleFillIcon = (props) => {
  return GenIcon(editCircleFill)(props);
};
var EditCircleLineIcon = (props) => {
  return GenIcon(editCircleLine)(props);
};
var EditFillIcon = (props) => {
  return GenIcon(editFill)(props);
};
var EditLineIcon = (props) => {
  return GenIcon(editLine)(props);
};
var EjectFillIcon = (props) => {
  return GenIcon(ejectFill)(props);
};
var EjectLineIcon = (props) => {
  return GenIcon(ejectLine)(props);
};
var Emotion2FillIcon = (props) => {
  return GenIcon(emotion2Fill)(props);
};
var Emotion2LineIcon = (props) => {
  return GenIcon(emotion2Line)(props);
};
var EmotionFillIcon = (props) => {
  return GenIcon(emotionFill)(props);
};
var EmotionHappyFillIcon = (props) => {
  return GenIcon(emotionHappyFill)(props);
};
var EmotionHappyLineIcon = (props) => {
  return GenIcon(emotionHappyLine)(props);
};
var EmotionLaughFillIcon = (props) => {
  return GenIcon(emotionLaughFill)(props);
};
var EmotionLaughLineIcon = (props) => {
  return GenIcon(emotionLaughLine)(props);
};
var EmotionLineIcon = (props) => {
  return GenIcon(emotionLine)(props);
};
var EmotionNormalFillIcon = (props) => {
  return GenIcon(emotionNormalFill)(props);
};
var EmotionNormalLineIcon = (props) => {
  return GenIcon(emotionNormalLine)(props);
};
var EmotionSadFillIcon = (props) => {
  return GenIcon(emotionSadFill)(props);
};
var EmotionSadLineIcon = (props) => {
  return GenIcon(emotionSadLine)(props);
};
var EmotionUnhappyFillIcon = (props) => {
  return GenIcon(emotionUnhappyFill)(props);
};
var EmotionUnhappyLineIcon = (props) => {
  return GenIcon(emotionUnhappyLine)(props);
};
var EmpathizeFillIcon = (props) => {
  return GenIcon(empathizeFill)(props);
};
var EmpathizeLineIcon = (props) => {
  return GenIcon(empathizeLine)(props);
};
var EqualizerFillIcon = (props) => {
  return GenIcon(equalizerFill)(props);
};
var EqualizerLineIcon = (props) => {
  return GenIcon(equalizerLine)(props);
};
var EraserFillIcon = (props) => {
  return GenIcon(eraserFill)(props);
};
var EraserLineIcon = (props) => {
  return GenIcon(eraserLine)(props);
};
var ErrorWarningFillIcon = (props) => {
  return GenIcon(errorWarningFill)(props);
};
var EvernoteFillIcon = (props) => {
  return GenIcon(evernoteFill)(props);
};
var EvernoteLineIcon = (props) => {
  return GenIcon(evernoteLine)(props);
};
var ExchangeBoxFillIcon = (props) => {
  return GenIcon(exchangeBoxFill)(props);
};
var ExchangeBoxLineIcon = (props) => {
  return GenIcon(exchangeBoxLine)(props);
};
var ExchangeCnyFillIcon = (props) => {
  return GenIcon(exchangeCnyFill)(props);
};
var ExchangeCnyLineIcon = (props) => {
  return GenIcon(exchangeCnyLine)(props);
};
var ExchangeDollarFillIcon = (props) => {
  return GenIcon(exchangeDollarFill)(props);
};
var ExchangeDollarLineIcon = (props) => {
  return GenIcon(exchangeDollarLine)(props);
};
var ExchangeFillIcon = (props) => {
  return GenIcon(exchangeFill)(props);
};
var ExchangeFundsFillIcon = (props) => {
  return GenIcon(exchangeFundsFill)(props);
};
var ExchangeFundsLineIcon = (props) => {
  return GenIcon(exchangeFundsLine)(props);
};
var ExchangeLineIcon = (props) => {
  return GenIcon(exchangeLine)(props);
};
var ExternalLinkLineIcon = (props) => {
  return GenIcon(externalLinkLine)(props);
};
var Eye2FillIcon = (props) => {
  return GenIcon(eye2Fill)(props);
};
var Eye2LineIcon = (props) => {
  return GenIcon(eye2Line)(props);
};
var EyeCloseFillIcon = (props) => {
  return GenIcon(eyeCloseFill)(props);
};
var EyeCloseLineIcon = (props) => {
  return GenIcon(eyeCloseLine)(props);
};
var EyeFillIcon = (props) => {
  return GenIcon(eyeFill)(props);
};
var EyeLineIcon = (props) => {
  return GenIcon(eyeLine)(props);
};
var EyeOffFillIcon = (props) => {
  return GenIcon(eyeOffFill)(props);
};
var EyeOffLineIcon = (props) => {
  return GenIcon(eyeOffLine)(props);
};
var FacebookBoxFillIcon = (props) => {
  return GenIcon(facebookBoxFill)(props);
};
var FacebookBoxLineIcon = (props) => {
  return GenIcon(facebookBoxLine)(props);
};
var FacebookCircleFillIcon = (props) => {
  return GenIcon(facebookCircleFill)(props);
};
var FacebookCircleLineIcon = (props) => {
  return GenIcon(facebookCircleLine)(props);
};
var FacebookFillIcon = (props) => {
  return GenIcon(facebookFill)(props);
};
var FacebookLineIcon = (props) => {
  return GenIcon(facebookLine)(props);
};
var FahrenheitFillIcon = (props) => {
  return GenIcon(fahrenheitFill)(props);
};
var FahrenheitLineIcon = (props) => {
  return GenIcon(fahrenheitLine)(props);
};
var FeedbackFillIcon = (props) => {
  return GenIcon(feedbackFill)(props);
};
var FeedbackLineIcon = (props) => {
  return GenIcon(feedbackLine)(props);
};
var File2FillIcon = (props) => {
  return GenIcon(file2Fill)(props);
};
var File2LineIcon = (props) => {
  return GenIcon(file2Line)(props);
};
var File3FillIcon = (props) => {
  return GenIcon(file3Fill)(props);
};
var File3LineIcon = (props) => {
  return GenIcon(file3Line)(props);
};
var File4FillIcon = (props) => {
  return GenIcon(file4Fill)(props);
};
var File4LineIcon = (props) => {
  return GenIcon(file4Line)(props);
};
var FileAddFillIcon = (props) => {
  return GenIcon(fileAddFill)(props);
};
var FileAddLineIcon = (props) => {
  return GenIcon(fileAddLine)(props);
};
var FileChart2FillIcon = (props) => {
  return GenIcon(fileChart2Fill)(props);
};
var FileChart2LineIcon = (props) => {
  return GenIcon(fileChart2Line)(props);
};
var FileChartFillIcon = (props) => {
  return GenIcon(fileChartFill)(props);
};
var FileChartLineIcon = (props) => {
  return GenIcon(fileChartLine)(props);
};
var FileCloudFillIcon = (props) => {
  return GenIcon(fileCloudFill)(props);
};
var FileCloudLineIcon = (props) => {
  return GenIcon(fileCloudLine)(props);
};
var FileCodeFillIcon = (props) => {
  return GenIcon(fileCodeFill)(props);
};
var FileCodeLineIcon = (props) => {
  return GenIcon(fileCodeLine)(props);
};
var FileCopy2FillIcon = (props) => {
  return GenIcon(fileCopy2Fill)(props);
};
var FileCopy2LineIcon = (props) => {
  return GenIcon(fileCopy2Line)(props);
};
var FileCopyFillIcon = (props) => {
  return GenIcon(fileCopyFill)(props);
};
var FileDamageFillIcon = (props) => {
  return GenIcon(fileDamageFill)(props);
};
var FileDamageLineIcon = (props) => {
  return GenIcon(fileDamageLine)(props);
};
var FileDownloadFillIcon = (props) => {
  return GenIcon(fileDownloadFill)(props);
};
var FileDownloadLineIcon = (props) => {
  return GenIcon(fileDownloadLine)(props);
};
var FileEditFillIcon = (props) => {
  return GenIcon(fileEditFill)(props);
};
var FileEditLineIcon = (props) => {
  return GenIcon(fileEditLine)(props);
};
var FileExcel2FillIcon = (props) => {
  return GenIcon(fileExcel2Fill)(props);
};
var FileExcel2LineIcon = (props) => {
  return GenIcon(fileExcel2Line)(props);
};
var FileExcelFillIcon = (props) => {
  return GenIcon(fileExcelFill)(props);
};
var FileExcelLineIcon = (props) => {
  return GenIcon(fileExcelLine)(props);
};
var FileFillIcon = (props) => {
  return GenIcon(fileFill)(props);
};
var FileForbidFillIcon = (props) => {
  return GenIcon(fileForbidFill)(props);
};
var FileForbidLineIcon = (props) => {
  return GenIcon(fileForbidLine)(props);
};
var FileGifFillIcon = (props) => {
  return GenIcon(fileGifFill)(props);
};
var FileGifLineIcon = (props) => {
  return GenIcon(fileGifLine)(props);
};
var FileHistoryFillIcon = (props) => {
  return GenIcon(fileHistoryFill)(props);
};
var FileHistoryLineIcon = (props) => {
  return GenIcon(fileHistoryLine)(props);
};
var FileHwpFillIcon = (props) => {
  return GenIcon(fileHwpFill)(props);
};
var FileHwpLineIcon = (props) => {
  return GenIcon(fileHwpLine)(props);
};
var FileInfoFillIcon = (props) => {
  return GenIcon(fileInfoFill)(props);
};
var FileInfoLineIcon = (props) => {
  return GenIcon(fileInfoLine)(props);
};
var FileLineIcon = (props) => {
  return GenIcon(fileLine)(props);
};
var FileList2FillIcon = (props) => {
  return GenIcon(fileList2Fill)(props);
};
var FileList2LineIcon = (props) => {
  return GenIcon(fileList2Line)(props);
};
var FileList3FillIcon = (props) => {
  return GenIcon(fileList3Fill)(props);
};
var FileList3LineIcon = (props) => {
  return GenIcon(fileList3Line)(props);
};
var FileListFillIcon = (props) => {
  return GenIcon(fileListFill)(props);
};
var FileListLineIcon = (props) => {
  return GenIcon(fileListLine)(props);
};
var FileLockFillIcon = (props) => {
  return GenIcon(fileLockFill)(props);
};
var FileLockLineIcon = (props) => {
  return GenIcon(fileLockLine)(props);
};
var FileMarkFillIcon = (props) => {
  return GenIcon(fileMarkFill)(props);
};
var FileMarkLineIcon = (props) => {
  return GenIcon(fileMarkLine)(props);
};
var FileMusicFillIcon = (props) => {
  return GenIcon(fileMusicFill)(props);
};
var FileMusicLineIcon = (props) => {
  return GenIcon(fileMusicLine)(props);
};
var FilePaper2FillIcon = (props) => {
  return GenIcon(filePaper2Fill)(props);
};
var FilePaper2LineIcon = (props) => {
  return GenIcon(filePaper2Line)(props);
};
var FilePaperFillIcon = (props) => {
  return GenIcon(filePaperFill)(props);
};
var FilePaperLineIcon = (props) => {
  return GenIcon(filePaperLine)(props);
};
var FilePdfFillIcon = (props) => {
  return GenIcon(filePdfFill)(props);
};
var FilePdfLineIcon = (props) => {
  return GenIcon(filePdfLine)(props);
};
var FilePpt2FillIcon = (props) => {
  return GenIcon(filePpt2Fill)(props);
};
var FilePpt2LineIcon = (props) => {
  return GenIcon(filePpt2Line)(props);
};
var FilePptFillIcon = (props) => {
  return GenIcon(filePptFill)(props);
};
var FilePptLineIcon = (props) => {
  return GenIcon(filePptLine)(props);
};
var FileReduceFillIcon = (props) => {
  return GenIcon(fileReduceFill)(props);
};
var FileReduceLineIcon = (props) => {
  return GenIcon(fileReduceLine)(props);
};
var FileSearchFillIcon = (props) => {
  return GenIcon(fileSearchFill)(props);
};
var FileSearchLineIcon = (props) => {
  return GenIcon(fileSearchLine)(props);
};
var FileSettingsFillIcon = (props) => {
  return GenIcon(fileSettingsFill)(props);
};
var FileSettingsLineIcon = (props) => {
  return GenIcon(fileSettingsLine)(props);
};
var FileShield2FillIcon = (props) => {
  return GenIcon(fileShield2Fill)(props);
};
var FileShield2LineIcon = (props) => {
  return GenIcon(fileShield2Line)(props);
};
var FileShieldFillIcon = (props) => {
  return GenIcon(fileShieldFill)(props);
};
var FileShieldLineIcon = (props) => {
  return GenIcon(fileShieldLine)(props);
};
var FileShredFillIcon = (props) => {
  return GenIcon(fileShredFill)(props);
};
var FileShredLineIcon = (props) => {
  return GenIcon(fileShredLine)(props);
};
var FileTextFillIcon = (props) => {
  return GenIcon(fileTextFill)(props);
};
var FileTextLineIcon = (props) => {
  return GenIcon(fileTextLine)(props);
};
var FileTransferFillIcon = (props) => {
  return GenIcon(fileTransferFill)(props);
};
var FileTransferLineIcon = (props) => {
  return GenIcon(fileTransferLine)(props);
};
var FileUnknowFillIcon = (props) => {
  return GenIcon(fileUnknowFill)(props);
};
var FileUnknowLineIcon = (props) => {
  return GenIcon(fileUnknowLine)(props);
};
var FileUploadFillIcon = (props) => {
  return GenIcon(fileUploadFill)(props);
};
var FileUploadLineIcon = (props) => {
  return GenIcon(fileUploadLine)(props);
};
var FileUserFillIcon = (props) => {
  return GenIcon(fileUserFill)(props);
};
var FileUserLineIcon = (props) => {
  return GenIcon(fileUserLine)(props);
};
var FileWarningFillIcon = (props) => {
  return GenIcon(fileWarningFill)(props);
};
var FileWarningLineIcon = (props) => {
  return GenIcon(fileWarningLine)(props);
};
var FileWord2FillIcon = (props) => {
  return GenIcon(fileWord2Fill)(props);
};
var FileWord2LineIcon = (props) => {
  return GenIcon(fileWord2Line)(props);
};
var FileWordFillIcon = (props) => {
  return GenIcon(fileWordFill)(props);
};
var FileWordLineIcon = (props) => {
  return GenIcon(fileWordLine)(props);
};
var FileZipFillIcon = (props) => {
  return GenIcon(fileZipFill)(props);
};
var FileZipLineIcon = (props) => {
  return GenIcon(fileZipLine)(props);
};
var FilmFillIcon = (props) => {
  return GenIcon(filmFill)(props);
};
var FilmLineIcon = (props) => {
  return GenIcon(filmLine)(props);
};
var Filter2FillIcon = (props) => {
  return GenIcon(filter2Fill)(props);
};
var Filter2LineIcon = (props) => {
  return GenIcon(filter2Line)(props);
};
var Filter3FillIcon = (props) => {
  return GenIcon(filter3Fill)(props);
};
var Filter3LineIcon = (props) => {
  return GenIcon(filter3Line)(props);
};
var FilterFillIcon = (props) => {
  return GenIcon(filterFill)(props);
};
var FilterLineIcon = (props) => {
  return GenIcon(filterLine)(props);
};
var FilterOffFillIcon = (props) => {
  return GenIcon(filterOffFill)(props);
};
var FilterOffLineIcon = (props) => {
  return GenIcon(filterOffLine)(props);
};
var FindReplaceFillIcon = (props) => {
  return GenIcon(findReplaceFill)(props);
};
var FindReplaceLineIcon = (props) => {
  return GenIcon(findReplaceLine)(props);
};
var FinderFillIcon = (props) => {
  return GenIcon(finderFill)(props);
};
var FinderLineIcon = (props) => {
  return GenIcon(finderLine)(props);
};
var Fingerprint2FillIcon = (props) => {
  return GenIcon(fingerprint2Fill)(props);
};
var Fingerprint2LineIcon = (props) => {
  return GenIcon(fingerprint2Line)(props);
};
var FingerprintFillIcon = (props) => {
  return GenIcon(fingerprintFill)(props);
};
var FingerprintLineIcon = (props) => {
  return GenIcon(fingerprintLine)(props);
};
var FireFillIcon = (props) => {
  return GenIcon(fireFill)(props);
};
var FireLineIcon = (props) => {
  return GenIcon(fireLine)(props);
};
var FirefoxFillIcon = (props) => {
  return GenIcon(firefoxFill)(props);
};
var FirefoxLineIcon = (props) => {
  return GenIcon(firefoxLine)(props);
};
var FirstAidKitFillIcon = (props) => {
  return GenIcon(firstAidKitFill)(props);
};
var FirstAidKitLineIcon = (props) => {
  return GenIcon(firstAidKitLine)(props);
};
var Flag2FillIcon = (props) => {
  return GenIcon(flag2Fill)(props);
};
var Flag2LineIcon = (props) => {
  return GenIcon(flag2Line)(props);
};
var FlagFillIcon = (props) => {
  return GenIcon(flagFill)(props);
};
var FlagLineIcon = (props) => {
  return GenIcon(flagLine)(props);
};
var FlashlightFillIcon = (props) => {
  return GenIcon(flashlightFill)(props);
};
var FlashlightLineIcon = (props) => {
  return GenIcon(flashlightLine)(props);
};
var FlaskFillIcon = (props) => {
  return GenIcon(flaskFill)(props);
};
var FlaskLineIcon = (props) => {
  return GenIcon(flaskLine)(props);
};
var FlightLandFillIcon = (props) => {
  return GenIcon(flightLandFill)(props);
};
var FlightLandLineIcon = (props) => {
  return GenIcon(flightLandLine)(props);
};
var FlightTakeoffFillIcon = (props) => {
  return GenIcon(flightTakeoffFill)(props);
};
var FlightTakeoffLineIcon = (props) => {
  return GenIcon(flightTakeoffLine)(props);
};
var FloodFillIcon = (props) => {
  return GenIcon(floodFill)(props);
};
var FloodLineIcon = (props) => {
  return GenIcon(floodLine)(props);
};
var FlutterFillIcon = (props) => {
  return GenIcon(flutterFill)(props);
};
var FlutterLineIcon = (props) => {
  return GenIcon(flutterLine)(props);
};
var Focus2FillIcon = (props) => {
  return GenIcon(focus2Fill)(props);
};
var Focus2LineIcon = (props) => {
  return GenIcon(focus2Line)(props);
};
var Focus3FillIcon = (props) => {
  return GenIcon(focus3Fill)(props);
};
var Focus3LineIcon = (props) => {
  return GenIcon(focus3Line)(props);
};
var FocusFillIcon = (props) => {
  return GenIcon(focusFill)(props);
};
var FocusLineIcon = (props) => {
  return GenIcon(focusLine)(props);
};
var FoggyFillIcon = (props) => {
  return GenIcon(foggyFill)(props);
};
var FoggyLineIcon = (props) => {
  return GenIcon(foggyLine)(props);
};
var Folder2FillIcon = (props) => {
  return GenIcon(folder2Fill)(props);
};
var Folder2LineIcon = (props) => {
  return GenIcon(folder2Line)(props);
};
var Folder3FillIcon = (props) => {
  return GenIcon(folder3Fill)(props);
};
var Folder3LineIcon = (props) => {
  return GenIcon(folder3Line)(props);
};
var Folder4FillIcon = (props) => {
  return GenIcon(folder4Fill)(props);
};
var Folder4LineIcon = (props) => {
  return GenIcon(folder4Line)(props);
};
var Folder5FillIcon = (props) => {
  return GenIcon(folder5Fill)(props);
};
var Folder5LineIcon = (props) => {
  return GenIcon(folder5Line)(props);
};
var FolderAddFillIcon = (props) => {
  return GenIcon(folderAddFill)(props);
};
var FolderAddLineIcon = (props) => {
  return GenIcon(folderAddLine)(props);
};
var FolderChart2FillIcon = (props) => {
  return GenIcon(folderChart2Fill)(props);
};
var FolderChart2LineIcon = (props) => {
  return GenIcon(folderChart2Line)(props);
};
var FolderChartFillIcon = (props) => {
  return GenIcon(folderChartFill)(props);
};
var FolderChartLineIcon = (props) => {
  return GenIcon(folderChartLine)(props);
};
var FolderDownloadFillIcon = (props) => {
  return GenIcon(folderDownloadFill)(props);
};
var FolderDownloadLineIcon = (props) => {
  return GenIcon(folderDownloadLine)(props);
};
var FolderFillIcon = (props) => {
  return GenIcon(folderFill)(props);
};
var FolderForbidFillIcon = (props) => {
  return GenIcon(folderForbidFill)(props);
};
var FolderForbidLineIcon = (props) => {
  return GenIcon(folderForbidLine)(props);
};
var FolderHistoryFillIcon = (props) => {
  return GenIcon(folderHistoryFill)(props);
};
var FolderHistoryLineIcon = (props) => {
  return GenIcon(folderHistoryLine)(props);
};
var FolderInfoFillIcon = (props) => {
  return GenIcon(folderInfoFill)(props);
};
var FolderInfoLineIcon = (props) => {
  return GenIcon(folderInfoLine)(props);
};
var FolderKeyholeFillIcon = (props) => {
  return GenIcon(folderKeyholeFill)(props);
};
var FolderKeyholeLineIcon = (props) => {
  return GenIcon(folderKeyholeLine)(props);
};
var FolderLineIcon = (props) => {
  return GenIcon(folderLine)(props);
};
var FolderLockFillIcon = (props) => {
  return GenIcon(folderLockFill)(props);
};
var FolderLockLineIcon = (props) => {
  return GenIcon(folderLockLine)(props);
};
var FolderMusicFillIcon = (props) => {
  return GenIcon(folderMusicFill)(props);
};
var FolderMusicLineIcon = (props) => {
  return GenIcon(folderMusicLine)(props);
};
var FolderOpenFillIcon = (props) => {
  return GenIcon(folderOpenFill)(props);
};
var FolderOpenLineIcon = (props) => {
  return GenIcon(folderOpenLine)(props);
};
var FolderReceivedFillIcon = (props) => {
  return GenIcon(folderReceivedFill)(props);
};
var FolderReceivedLineIcon = (props) => {
  return GenIcon(folderReceivedLine)(props);
};
var FolderReduceFillIcon = (props) => {
  return GenIcon(folderReduceFill)(props);
};
var FolderReduceLineIcon = (props) => {
  return GenIcon(folderReduceLine)(props);
};
var FolderSettingsFillIcon = (props) => {
  return GenIcon(folderSettingsFill)(props);
};
var FolderSettingsLineIcon = (props) => {
  return GenIcon(folderSettingsLine)(props);
};
var FolderSharedFillIcon = (props) => {
  return GenIcon(folderSharedFill)(props);
};
var FolderSharedLineIcon = (props) => {
  return GenIcon(folderSharedLine)(props);
};
var FolderShield2FillIcon = (props) => {
  return GenIcon(folderShield2Fill)(props);
};
var FolderShield2LineIcon = (props) => {
  return GenIcon(folderShield2Line)(props);
};
var FolderShieldFillIcon = (props) => {
  return GenIcon(folderShieldFill)(props);
};
var FolderShieldLineIcon = (props) => {
  return GenIcon(folderShieldLine)(props);
};
var FolderTransferFillIcon = (props) => {
  return GenIcon(folderTransferFill)(props);
};
var FolderTransferLineIcon = (props) => {
  return GenIcon(folderTransferLine)(props);
};
var FolderUnknowFillIcon = (props) => {
  return GenIcon(folderUnknowFill)(props);
};
var FolderUnknowLineIcon = (props) => {
  return GenIcon(folderUnknowLine)(props);
};
var FolderUploadFillIcon = (props) => {
  return GenIcon(folderUploadFill)(props);
};
var FolderUploadLineIcon = (props) => {
  return GenIcon(folderUploadLine)(props);
};
var FolderUserFillIcon = (props) => {
  return GenIcon(folderUserFill)(props);
};
var FolderUserLineIcon = (props) => {
  return GenIcon(folderUserLine)(props);
};
var FolderWarningFillIcon = (props) => {
  return GenIcon(folderWarningFill)(props);
};
var FolderWarningLineIcon = (props) => {
  return GenIcon(folderWarningLine)(props);
};
var FolderZipFillIcon = (props) => {
  return GenIcon(folderZipFill)(props);
};
var FolderZipLineIcon = (props) => {
  return GenIcon(folderZipLine)(props);
};
var FoldersFillIcon = (props) => {
  return GenIcon(foldersFill)(props);
};
var FoldersLineIcon = (props) => {
  return GenIcon(foldersLine)(props);
};
var FootballFillIcon = (props) => {
  return GenIcon(footballFill)(props);
};
var FootballLineIcon = (props) => {
  return GenIcon(footballLine)(props);
};
var FootprintFillIcon = (props) => {
  return GenIcon(footprintFill)(props);
};
var FootprintLineIcon = (props) => {
  return GenIcon(footprintLine)(props);
};
var Forbid2FillIcon = (props) => {
  return GenIcon(forbid2Fill)(props);
};
var Forbid2LineIcon = (props) => {
  return GenIcon(forbid2Line)(props);
};
var ForbidFillIcon = (props) => {
  return GenIcon(forbidFill)(props);
};
var ForbidLineIcon = (props) => {
  return GenIcon(forbidLine)(props);
};
var FridgeFillIcon = (props) => {
  return GenIcon(fridgeFill)(props);
};
var FridgeLineIcon = (props) => {
  return GenIcon(fridgeLine)(props);
};
var FullscreenExitFillIcon = (props) => {
  return GenIcon(fullscreenExitFill)(props);
};
var FullscreenFillIcon = (props) => {
  return GenIcon(fullscreenFill)(props);
};
var FunctionFillIcon = (props) => {
  return GenIcon(functionFill)(props);
};
var FunctionLineIcon = (props) => {
  return GenIcon(functionLine)(props);
};
var FundsBoxFillIcon = (props) => {
  return GenIcon(fundsBoxFill)(props);
};
var FundsBoxLineIcon = (props) => {
  return GenIcon(fundsBoxLine)(props);
};
var FundsFillIcon = (props) => {
  return GenIcon(fundsFill)(props);
};
var FundsLineIcon = (props) => {
  return GenIcon(fundsLine)(props);
};
var GalleryFillIcon = (props) => {
  return GenIcon(galleryFill)(props);
};
var GalleryLineIcon = (props) => {
  return GenIcon(galleryLine)(props);
};
var GalleryUploadFillIcon = (props) => {
  return GenIcon(galleryUploadFill)(props);
};
var GameFillIcon = (props) => {
  return GenIcon(gameFill)(props);
};
var GameLineIcon = (props) => {
  return GenIcon(gameLine)(props);
};
var GamepadFillIcon = (props) => {
  return GenIcon(gamepadFill)(props);
};
var GamepadLineIcon = (props) => {
  return GenIcon(gamepadLine)(props);
};
var GasStationFillIcon = (props) => {
  return GenIcon(gasStationFill)(props);
};
var GasStationLineIcon = (props) => {
  return GenIcon(gasStationLine)(props);
};
var GatsbyFillIcon = (props) => {
  return GenIcon(gatsbyFill)(props);
};
var GatsbyLineIcon = (props) => {
  return GenIcon(gatsbyLine)(props);
};
var GenderlessFillIcon = (props) => {
  return GenIcon(genderlessFill)(props);
};
var GenderlessLineIcon = (props) => {
  return GenIcon(genderlessLine)(props);
};
var Ghost2FillIcon = (props) => {
  return GenIcon(ghost2Fill)(props);
};
var Ghost2LineIcon = (props) => {
  return GenIcon(ghost2Line)(props);
};
var GhostFillIcon = (props) => {
  return GenIcon(ghostFill)(props);
};
var GhostLineIcon = (props) => {
  return GenIcon(ghostLine)(props);
};
var GhostSmileFillIcon = (props) => {
  return GenIcon(ghostSmileFill)(props);
};
var GhostSmileLineIcon = (props) => {
  return GenIcon(ghostSmileLine)(props);
};
var Gift2FillIcon = (props) => {
  return GenIcon(gift2Fill)(props);
};
var Gift2LineIcon = (props) => {
  return GenIcon(gift2Line)(props);
};
var GiftFillIcon = (props) => {
  return GenIcon(giftFill)(props);
};
var GiftLineIcon = (props) => {
  return GenIcon(giftLine)(props);
};
var GitBranchFillIcon = (props) => {
  return GenIcon(gitBranchFill)(props);
};
var GitBranchLineIcon = (props) => {
  return GenIcon(gitBranchLine)(props);
};
var GitCommitFillIcon = (props) => {
  return GenIcon(gitCommitFill)(props);
};
var GitCommitLineIcon = (props) => {
  return GenIcon(gitCommitLine)(props);
};
var GitMergeFillIcon = (props) => {
  return GenIcon(gitMergeFill)(props);
};
var GitMergeLineIcon = (props) => {
  return GenIcon(gitMergeLine)(props);
};
var GitPullRequestFillIcon = (props) => {
  return GenIcon(gitPullRequestFill)(props);
};
var GitPullRequestLineIcon = (props) => {
  return GenIcon(gitPullRequestLine)(props);
};
var GitRepositoryCommitsFillIcon = (props) => {
  return GenIcon(gitRepositoryCommitsFill)(props);
};
var GitRepositoryCommitsLineIcon = (props) => {
  return GenIcon(gitRepositoryCommitsLine)(props);
};
var GitRepositoryFillIcon = (props) => {
  return GenIcon(gitRepositoryFill)(props);
};
var GitRepositoryLineIcon = (props) => {
  return GenIcon(gitRepositoryLine)(props);
};
var GitRepositoryPrivateFillIcon = (props) => {
  return GenIcon(gitRepositoryPrivateFill)(props);
};
var GitRepositoryPrivateLineIcon = (props) => {
  return GenIcon(gitRepositoryPrivateLine)(props);
};
var GithubFillIcon = (props) => {
  return GenIcon(githubFill)(props);
};
var GithubLineIcon = (props) => {
  return GenIcon(githubLine)(props);
};
var GitlabFillIcon = (props) => {
  return GenIcon(gitlabFill)(props);
};
var GitlabLineIcon = (props) => {
  return GenIcon(gitlabLine)(props);
};
var GlobalFillIcon = (props) => {
  return GenIcon(globalFill)(props);
};
var GlobalLineIcon = (props) => {
  return GenIcon(globalLine)(props);
};
var GlobeFillIcon = (props) => {
  return GenIcon(globeFill)(props);
};
var GlobeLineIcon = (props) => {
  return GenIcon(globeLine)(props);
};
var GobletFillIcon = (props) => {
  return GenIcon(gobletFill)(props);
};
var GobletLineIcon = (props) => {
  return GenIcon(gobletLine)(props);
};
var GoogleFillIcon = (props) => {
  return GenIcon(googleFill)(props);
};
var GoogleLineIcon = (props) => {
  return GenIcon(googleLine)(props);
};
var GooglePlayFillIcon = (props) => {
  return GenIcon(googlePlayFill)(props);
};
var GooglePlayLineIcon = (props) => {
  return GenIcon(googlePlayLine)(props);
};
var GovernmentFillIcon = (props) => {
  return GenIcon(governmentFill)(props);
};
var GovernmentLineIcon = (props) => {
  return GenIcon(governmentLine)(props);
};
var GpsFillIcon = (props) => {
  return GenIcon(gpsFill)(props);
};
var GpsLineIcon = (props) => {
  return GenIcon(gpsLine)(props);
};
var GradienterFillIcon = (props) => {
  return GenIcon(gradienterFill)(props);
};
var GradienterLineIcon = (props) => {
  return GenIcon(gradienterLine)(props);
};
var GridFillIcon = (props) => {
  return GenIcon(gridFill)(props);
};
var GridLineIcon = (props) => {
  return GenIcon(gridLine)(props);
};
var Group2FillIcon = (props) => {
  return GenIcon(group2Fill)(props);
};
var Group2LineIcon = (props) => {
  return GenIcon(group2Line)(props);
};
var GroupFillIcon = (props) => {
  return GenIcon(groupFill)(props);
};
var GroupLineIcon = (props) => {
  return GenIcon(groupLine)(props);
};
var GuideFillIcon = (props) => {
  return GenIcon(guideFill)(props);
};
var GuideLineIcon = (props) => {
  return GenIcon(guideLine)(props);
};
var HailFillIcon = (props) => {
  return GenIcon(hailFill)(props);
};
var HailLineIcon = (props) => {
  return GenIcon(hailLine)(props);
};
var HammerFillIcon = (props) => {
  return GenIcon(hammerFill)(props);
};
var HammerLineIcon = (props) => {
  return GenIcon(hammerLine)(props);
};
var HandCoinFillIcon = (props) => {
  return GenIcon(handCoinFill)(props);
};
var HandCoinLineIcon = (props) => {
  return GenIcon(handCoinLine)(props);
};
var HandHeartFillIcon = (props) => {
  return GenIcon(handHeartFill)(props);
};
var HandHeartLineIcon = (props) => {
  return GenIcon(handHeartLine)(props);
};
var HandSanitizerFillIcon = (props) => {
  return GenIcon(handSanitizerFill)(props);
};
var HandSanitizerLineIcon = (props) => {
  return GenIcon(handSanitizerLine)(props);
};
var HandbagFillIcon = (props) => {
  return GenIcon(handbagFill)(props);
};
var HandbagLineIcon = (props) => {
  return GenIcon(handbagLine)(props);
};
var HardDrive2FillIcon = (props) => {
  return GenIcon(hardDrive2Fill)(props);
};
var HardDrive2LineIcon = (props) => {
  return GenIcon(hardDrive2Line)(props);
};
var HardDriveFillIcon = (props) => {
  return GenIcon(hardDriveFill)(props);
};
var HardDriveLineIcon = (props) => {
  return GenIcon(hardDriveLine)(props);
};
var Haze2FillIcon = (props) => {
  return GenIcon(haze2Fill)(props);
};
var Haze2LineIcon = (props) => {
  return GenIcon(haze2Line)(props);
};
var HazeFillIcon = (props) => {
  return GenIcon(hazeFill)(props);
};
var HazeLineIcon = (props) => {
  return GenIcon(hazeLine)(props);
};
var HdFillIcon = (props) => {
  return GenIcon(hdFill)(props);
};
var HdLineIcon = (props) => {
  return GenIcon(hdLine)(props);
};
var HeadphoneFillIcon = (props) => {
  return GenIcon(headphoneFill)(props);
};
var HeadphoneLineIcon = (props) => {
  return GenIcon(headphoneLine)(props);
};
var HealthBookFillIcon = (props) => {
  return GenIcon(healthBookFill)(props);
};
var HealthBookLineIcon = (props) => {
  return GenIcon(healthBookLine)(props);
};
var Heart2FillIcon = (props) => {
  return GenIcon(heart2Fill)(props);
};
var Heart2LineIcon = (props) => {
  return GenIcon(heart2Line)(props);
};
var Heart3FillIcon = (props) => {
  return GenIcon(heart3Fill)(props);
};
var Heart3LineIcon = (props) => {
  return GenIcon(heart3Line)(props);
};
var HeartAddFillIcon = (props) => {
  return GenIcon(heartAddFill)(props);
};
var HeartAddLineIcon = (props) => {
  return GenIcon(heartAddLine)(props);
};
var HeartFillIcon = (props) => {
  return GenIcon(heartFill)(props);
};
var HeartLineIcon = (props) => {
  return GenIcon(heartLine)(props);
};
var HeartPulseFillIcon = (props) => {
  return GenIcon(heartPulseFill)(props);
};
var HeartPulseLineIcon = (props) => {
  return GenIcon(heartPulseLine)(props);
};
var HeartsFillIcon = (props) => {
  return GenIcon(heartsFill)(props);
};
var HeartsLineIcon = (props) => {
  return GenIcon(heartsLine)(props);
};
var HeavyShowersFillIcon = (props) => {
  return GenIcon(heavyShowersFill)(props);
};
var HeavyShowersLineIcon = (props) => {
  return GenIcon(heavyShowersLine)(props);
};
var HistoryFillIcon = (props) => {
  return GenIcon(historyFill)(props);
};
var HistoryLineIcon = (props) => {
  return GenIcon(historyLine)(props);
};
var Home2FillIcon = (props) => {
  return GenIcon(home2Fill)(props);
};
var Home2LineIcon = (props) => {
  return GenIcon(home2Line)(props);
};
var Home3FillIcon = (props) => {
  return GenIcon(home3Fill)(props);
};
var Home3LineIcon = (props) => {
  return GenIcon(home3Line)(props);
};
var Home4FillIcon = (props) => {
  return GenIcon(home4Fill)(props);
};
var Home4LineIcon = (props) => {
  return GenIcon(home4Line)(props);
};
var Home5FillIcon = (props) => {
  return GenIcon(home5Fill)(props);
};
var Home5LineIcon = (props) => {
  return GenIcon(home5Line)(props);
};
var Home6FillIcon = (props) => {
  return GenIcon(home6Fill)(props);
};
var Home6LineIcon = (props) => {
  return GenIcon(home6Line)(props);
};
var Home7FillIcon = (props) => {
  return GenIcon(home7Fill)(props);
};
var Home7LineIcon = (props) => {
  return GenIcon(home7Line)(props);
};
var Home8FillIcon = (props) => {
  return GenIcon(home8Fill)(props);
};
var Home8LineIcon = (props) => {
  return GenIcon(home8Line)(props);
};
var HomeFillIcon = (props) => {
  return GenIcon(homeFill)(props);
};
var HomeGearFillIcon = (props) => {
  return GenIcon(homeGearFill)(props);
};
var HomeGearLineIcon = (props) => {
  return GenIcon(homeGearLine)(props);
};
var HomeHeartFillIcon = (props) => {
  return GenIcon(homeHeartFill)(props);
};
var HomeHeartLineIcon = (props) => {
  return GenIcon(homeHeartLine)(props);
};
var HomeLineIcon = (props) => {
  return GenIcon(homeLine)(props);
};
var HomeSmile2FillIcon = (props) => {
  return GenIcon(homeSmile2Fill)(props);
};
var HomeSmile2LineIcon = (props) => {
  return GenIcon(homeSmile2Line)(props);
};
var HomeSmileFillIcon = (props) => {
  return GenIcon(homeSmileFill)(props);
};
var HomeSmileLineIcon = (props) => {
  return GenIcon(homeSmileLine)(props);
};
var HomeWifiFillIcon = (props) => {
  return GenIcon(homeWifiFill)(props);
};
var HomeWifiLineIcon = (props) => {
  return GenIcon(homeWifiLine)(props);
};
var HonorOfKingsFillIcon = (props) => {
  return GenIcon(honorOfKingsFill)(props);
};
var HonorOfKingsLineIcon = (props) => {
  return GenIcon(honorOfKingsLine)(props);
};
var HonourFillIcon = (props) => {
  return GenIcon(honourFill)(props);
};
var HonourLineIcon = (props) => {
  return GenIcon(honourLine)(props);
};
var HospitalFillIcon = (props) => {
  return GenIcon(hospitalFill)(props);
};
var HospitalLineIcon = (props) => {
  return GenIcon(hospitalLine)(props);
};
var HotelBedFillIcon = (props) => {
  return GenIcon(hotelBedFill)(props);
};
var HotelBedLineIcon = (props) => {
  return GenIcon(hotelBedLine)(props);
};
var HotelFillIcon = (props) => {
  return GenIcon(hotelFill)(props);
};
var HotelLineIcon = (props) => {
  return GenIcon(hotelLine)(props);
};
var HotspotFillIcon = (props) => {
  return GenIcon(hotspotFill)(props);
};
var HotspotLineIcon = (props) => {
  return GenIcon(hotspotLine)(props);
};
var HqFillIcon = (props) => {
  return GenIcon(hqFill)(props);
};
var HqLineIcon = (props) => {
  return GenIcon(hqLine)(props);
};
var Html5FillIcon = (props) => {
  return GenIcon(html5Fill)(props);
};
var Html5LineIcon = (props) => {
  return GenIcon(html5Line)(props);
};
var IeFillIcon = (props) => {
  return GenIcon(ieFill)(props);
};
var IeLineIcon = (props) => {
  return GenIcon(ieLine)(props);
};
var Image2FillIcon = (props) => {
  return GenIcon(image2Fill)(props);
};
var Image2LineIcon = (props) => {
  return GenIcon(image2Line)(props);
};
var ImageAddFillIcon = (props) => {
  return GenIcon(imageAddFill)(props);
};
var ImageEditFillIcon = (props) => {
  return GenIcon(imageEditFill)(props);
};
var ImageFillIcon = (props) => {
  return GenIcon(imageFill)(props);
};
var InboxArchiveFillIcon = (props) => {
  return GenIcon(inboxArchiveFill)(props);
};
var InboxArchiveLineIcon = (props) => {
  return GenIcon(inboxArchiveLine)(props);
};
var InboxFillIcon = (props) => {
  return GenIcon(inboxFill)(props);
};
var InboxLineIcon = (props) => {
  return GenIcon(inboxLine)(props);
};
var InboxUnarchiveFillIcon = (props) => {
  return GenIcon(inboxUnarchiveFill)(props);
};
var InboxUnarchiveLineIcon = (props) => {
  return GenIcon(inboxUnarchiveLine)(props);
};
var IncreaseDecreaseFillIcon = (props) => {
  return GenIcon(increaseDecreaseFill)(props);
};
var IncreaseDecreaseLineIcon = (props) => {
  return GenIcon(increaseDecreaseLine)(props);
};
var IndeterminateCircleFillIcon = (props) => {
  return GenIcon(indeterminateCircleFill)(props);
};
var IndeterminateCircleLineIcon = (props) => {
  return GenIcon(indeterminateCircleLine)(props);
};
var InformationFillIcon = (props) => {
  return GenIcon(informationFill)(props);
};
var InfraredThermometerFillIcon = (props) => {
  return GenIcon(infraredThermometerFill)(props);
};
var InfraredThermometerLineIcon = (props) => {
  return GenIcon(infraredThermometerLine)(props);
};
var InkBottleFillIcon = (props) => {
  return GenIcon(inkBottleFill)(props);
};
var InkBottleLineIcon = (props) => {
  return GenIcon(inkBottleLine)(props);
};
var InputMethodFillIcon = (props) => {
  return GenIcon(inputMethodFill)(props);
};
var InputMethodLineIcon = (props) => {
  return GenIcon(inputMethodLine)(props);
};
var InstagramFillIcon = (props) => {
  return GenIcon(instagramFill)(props);
};
var InstagramLineIcon = (props) => {
  return GenIcon(instagramLine)(props);
};
var InstallFillIcon = (props) => {
  return GenIcon(installFill)(props);
};
var InstallLineIcon = (props) => {
  return GenIcon(installLine)(props);
};
var InvisionFillIcon = (props) => {
  return GenIcon(invisionFill)(props);
};
var InvisionLineIcon = (props) => {
  return GenIcon(invisionLine)(props);
};
var KakaoTalkFillIcon = (props) => {
  return GenIcon(kakaoTalkFill)(props);
};
var KakaoTalkLineIcon = (props) => {
  return GenIcon(kakaoTalkLine)(props);
};
var Key2FillIcon = (props) => {
  return GenIcon(key2Fill)(props);
};
var Key2LineIcon = (props) => {
  return GenIcon(key2Line)(props);
};
var KeyFillIcon = (props) => {
  return GenIcon(keyFill)(props);
};
var KeyLineIcon = (props) => {
  return GenIcon(keyLine)(props);
};
var KeyboardBoxFillIcon = (props) => {
  return GenIcon(keyboardBoxFill)(props);
};
var KeyboardBoxLineIcon = (props) => {
  return GenIcon(keyboardBoxLine)(props);
};
var KeyboardFillIcon = (props) => {
  return GenIcon(keyboardFill)(props);
};
var KeyboardLineIcon = (props) => {
  return GenIcon(keyboardLine)(props);
};
var KeynoteFillIcon = (props) => {
  return GenIcon(keynoteFill)(props);
};
var KeynoteLineIcon = (props) => {
  return GenIcon(keynoteLine)(props);
};
var KnifeBloodFillIcon = (props) => {
  return GenIcon(knifeBloodFill)(props);
};
var KnifeBloodLineIcon = (props) => {
  return GenIcon(knifeBloodLine)(props);
};
var KnifeFillIcon = (props) => {
  return GenIcon(knifeFill)(props);
};
var KnifeLineIcon = (props) => {
  return GenIcon(knifeLine)(props);
};
var LandscapeFillIcon = (props) => {
  return GenIcon(landscapeFill)(props);
};
var LandscapeLineIcon = (props) => {
  return GenIcon(landscapeLine)(props);
};
var Layout2FillIcon = (props) => {
  return GenIcon(layout2Fill)(props);
};
var Layout2LineIcon = (props) => {
  return GenIcon(layout2Line)(props);
};
var Layout3FillIcon = (props) => {
  return GenIcon(layout3Fill)(props);
};
var Layout3LineIcon = (props) => {
  return GenIcon(layout3Line)(props);
};
var Layout4FillIcon = (props) => {
  return GenIcon(layout4Fill)(props);
};
var Layout4LineIcon = (props) => {
  return GenIcon(layout4Line)(props);
};
var Layout5FillIcon = (props) => {
  return GenIcon(layout5Fill)(props);
};
var Layout5LineIcon = (props) => {
  return GenIcon(layout5Line)(props);
};
var Layout6FillIcon = (props) => {
  return GenIcon(layout6Fill)(props);
};
var Layout6LineIcon = (props) => {
  return GenIcon(layout6Line)(props);
};
var LayoutBottom2FillIcon = (props) => {
  return GenIcon(layoutBottom2Fill)(props);
};
var LayoutBottom2LineIcon = (props) => {
  return GenIcon(layoutBottom2Line)(props);
};
var LayoutBottomFillIcon = (props) => {
  return GenIcon(layoutBottomFill)(props);
};
var LayoutBottomLineIcon = (props) => {
  return GenIcon(layoutBottomLine)(props);
};
var LayoutColumnFillIcon = (props) => {
  return GenIcon(layoutColumnFill)(props);
};
var LayoutFillIcon = (props) => {
  return GenIcon(layoutFill)(props);
};
var LayoutGridFillIcon = (props) => {
  return GenIcon(layoutGridFill)(props);
};
var LayoutGridLineIcon = (props) => {
  return GenIcon(layoutGridLine)(props);
};
var LayoutLeft2FillIcon = (props) => {
  return GenIcon(layoutLeft2Fill)(props);
};
var LayoutLeft2LineIcon = (props) => {
  return GenIcon(layoutLeft2Line)(props);
};
var LayoutLeftFillIcon = (props) => {
  return GenIcon(layoutLeftFill)(props);
};
var LayoutLeftLineIcon = (props) => {
  return GenIcon(layoutLeftLine)(props);
};
var LayoutLineIcon = (props) => {
  return GenIcon(layoutLine)(props);
};
var LayoutMasonryFillIcon = (props) => {
  return GenIcon(layoutMasonryFill)(props);
};
var LayoutMasonryLineIcon = (props) => {
  return GenIcon(layoutMasonryLine)(props);
};
var LayoutRight2FillIcon = (props) => {
  return GenIcon(layoutRight2Fill)(props);
};
var LayoutRight2LineIcon = (props) => {
  return GenIcon(layoutRight2Line)(props);
};
var LayoutRightFillIcon = (props) => {
  return GenIcon(layoutRightFill)(props);
};
var LayoutRightLineIcon = (props) => {
  return GenIcon(layoutRightLine)(props);
};
var LayoutRowFillIcon = (props) => {
  return GenIcon(layoutRowFill)(props);
};
var LayoutRowLineIcon = (props) => {
  return GenIcon(layoutRowLine)(props);
};
var LayoutTop2FillIcon = (props) => {
  return GenIcon(layoutTop2Fill)(props);
};
var LayoutTop2LineIcon = (props) => {
  return GenIcon(layoutTop2Line)(props);
};
var LayoutTopFillIcon = (props) => {
  return GenIcon(layoutTopFill)(props);
};
var LayoutTopLineIcon = (props) => {
  return GenIcon(layoutTopLine)(props);
};
var LeafFillIcon = (props) => {
  return GenIcon(leafFill)(props);
};
var LeafLineIcon = (props) => {
  return GenIcon(leafLine)(props);
};
var LifebuoyFillIcon = (props) => {
  return GenIcon(lifebuoyFill)(props);
};
var LifebuoyLineIcon = (props) => {
  return GenIcon(lifebuoyLine)(props);
};
var LightbulbFillIcon = (props) => {
  return GenIcon(lightbulbFill)(props);
};
var LightbulbFlashFillIcon = (props) => {
  return GenIcon(lightbulbFlashFill)(props);
};
var LightbulbFlashLineIcon = (props) => {
  return GenIcon(lightbulbFlashLine)(props);
};
var LightbulbLineIcon = (props) => {
  return GenIcon(lightbulbLine)(props);
};
var LineChartFillIcon = (props) => {
  return GenIcon(lineChartFill)(props);
};
var LineChartLineIcon = (props) => {
  return GenIcon(lineChartLine)(props);
};
var LineFillIcon = (props) => {
  return GenIcon(lineFill)(props);
};
var LineLineIcon = (props) => {
  return GenIcon(lineLine)(props);
};
var LinkedinBoxFillIcon = (props) => {
  return GenIcon(linkedinBoxFill)(props);
};
var LinkedinBoxLineIcon = (props) => {
  return GenIcon(linkedinBoxLine)(props);
};
var LinkedinFillIcon = (props) => {
  return GenIcon(linkedinFill)(props);
};
var LinkedinLineIcon = (props) => {
  return GenIcon(linkedinLine)(props);
};
var LinksFillIcon = (props) => {
  return GenIcon(linksFill)(props);
};
var LinksLineIcon = (props) => {
  return GenIcon(linksLine)(props);
};
var ListSettingsFillIcon = (props) => {
  return GenIcon(listSettingsFill)(props);
};
var ListSettingsLineIcon = (props) => {
  return GenIcon(listSettingsLine)(props);
};
var LiveFillIcon = (props) => {
  return GenIcon(liveFill)(props);
};
var LiveLineIcon = (props) => {
  return GenIcon(liveLine)(props);
};
var Loader2FillIcon = (props) => {
  return GenIcon(loader2Fill)(props);
};
var Loader2LineIcon = (props) => {
  return GenIcon(loader2Line)(props);
};
var Loader3FillIcon = (props) => {
  return GenIcon(loader3Fill)(props);
};
var Loader3LineIcon = (props) => {
  return GenIcon(loader3Line)(props);
};
var Loader4FillIcon = (props) => {
  return GenIcon(loader4Fill)(props);
};
var Loader4LineIcon = (props) => {
  return GenIcon(loader4Line)(props);
};
var Loader5FillIcon = (props) => {
  return GenIcon(loader5Fill)(props);
};
var Loader5LineIcon = (props) => {
  return GenIcon(loader5Line)(props);
};
var LoaderFillIcon = (props) => {
  return GenIcon(loaderFill)(props);
};
var LoaderLineIcon = (props) => {
  return GenIcon(loaderLine)(props);
};
var Lock2FillIcon = (props) => {
  return GenIcon(lock2Fill)(props);
};
var Lock2LineIcon = (props) => {
  return GenIcon(lock2Line)(props);
};
var LockFillIcon = (props) => {
  return GenIcon(lockFill)(props);
};
var LockLineIcon = (props) => {
  return GenIcon(lockLine)(props);
};
var LockPasswordFillIcon = (props) => {
  return GenIcon(lockPasswordFill)(props);
};
var LockPasswordLineIcon = (props) => {
  return GenIcon(lockPasswordLine)(props);
};
var LockUnlockFillIcon = (props) => {
  return GenIcon(lockUnlockFill)(props);
};
var LockUnlockLineIcon = (props) => {
  return GenIcon(lockUnlockLine)(props);
};
var LoginBoxFillIcon = (props) => {
  return GenIcon(loginBoxFill)(props);
};
var LoginBoxLineIcon = (props) => {
  return GenIcon(loginBoxLine)(props);
};
var LoginCircleFillIcon = (props) => {
  return GenIcon(loginCircleFill)(props);
};
var LoginCircleLineIcon = (props) => {
  return GenIcon(loginCircleLine)(props);
};
var LogoutBoxFillIcon = (props) => {
  return GenIcon(logoutBoxFill)(props);
};
var LogoutBoxLineIcon = (props) => {
  return GenIcon(logoutBoxLine)(props);
};
var LogoutBoxRFillIcon = (props) => {
  return GenIcon(logoutBoxRFill)(props);
};
var LogoutBoxRLineIcon = (props) => {
  return GenIcon(logoutBoxRLine)(props);
};
var LogoutCircleFillIcon = (props) => {
  return GenIcon(logoutCircleFill)(props);
};
var LogoutCircleLineIcon = (props) => {
  return GenIcon(logoutCircleLine)(props);
};
var LogoutCircleRFillIcon = (props) => {
  return GenIcon(logoutCircleRFill)(props);
};
var LogoutCircleRLineIcon = (props) => {
  return GenIcon(logoutCircleRLine)(props);
};
var LuggageCartFillIcon = (props) => {
  return GenIcon(luggageCartFill)(props);
};
var LuggageCartLineIcon = (props) => {
  return GenIcon(luggageCartLine)(props);
};
var LuggageDepositFillIcon = (props) => {
  return GenIcon(luggageDepositFill)(props);
};
var LuggageDepositLineIcon = (props) => {
  return GenIcon(luggageDepositLine)(props);
};
var LungsFillIcon = (props) => {
  return GenIcon(lungsFill)(props);
};
var LungsLineIcon = (props) => {
  return GenIcon(lungsLine)(props);
};
var MacFillIcon = (props) => {
  return GenIcon(macFill)(props);
};
var MacLineIcon = (props) => {
  return GenIcon(macLine)(props);
};
var MacbookFillIcon = (props) => {
  return GenIcon(macbookFill)(props);
};
var MacbookLineIcon = (props) => {
  return GenIcon(macbookLine)(props);
};
var MagicFillIcon = (props) => {
  return GenIcon(magicFill)(props);
};
var MagicLineIcon = (props) => {
  return GenIcon(magicLine)(props);
};
var MailAddFillIcon = (props) => {
  return GenIcon(mailAddFill)(props);
};
var MailAddLineIcon = (props) => {
  return GenIcon(mailAddLine)(props);
};
var MailCheckFillIcon = (props) => {
  return GenIcon(mailCheckFill)(props);
};
var MailCheckLineIcon = (props) => {
  return GenIcon(mailCheckLine)(props);
};
var MailCloseFillIcon = (props) => {
  return GenIcon(mailCloseFill)(props);
};
var MailCloseLineIcon = (props) => {
  return GenIcon(mailCloseLine)(props);
};
var MailDownloadFillIcon = (props) => {
  return GenIcon(mailDownloadFill)(props);
};
var MailDownloadLineIcon = (props) => {
  return GenIcon(mailDownloadLine)(props);
};
var MailFillIcon = (props) => {
  return GenIcon(mailFill)(props);
};
var MailForbidFillIcon = (props) => {
  return GenIcon(mailForbidFill)(props);
};
var MailForbidLineIcon = (props) => {
  return GenIcon(mailForbidLine)(props);
};
var MailLineIcon = (props) => {
  return GenIcon(mailLine)(props);
};
var MailLockFillIcon = (props) => {
  return GenIcon(mailLockFill)(props);
};
var MailLockLineIcon = (props) => {
  return GenIcon(mailLockLine)(props);
};
var MailOpenFillIcon = (props) => {
  return GenIcon(mailOpenFill)(props);
};
var MailOpenLineIcon = (props) => {
  return GenIcon(mailOpenLine)(props);
};
var MailSendFillIcon = (props) => {
  return GenIcon(mailSendFill)(props);
};
var MailSendLineIcon = (props) => {
  return GenIcon(mailSendLine)(props);
};
var MailSettingsFillIcon = (props) => {
  return GenIcon(mailSettingsFill)(props);
};
var MailSettingsLineIcon = (props) => {
  return GenIcon(mailSettingsLine)(props);
};
var MailStarFillIcon = (props) => {
  return GenIcon(mailStarFill)(props);
};
var MailStarLineIcon = (props) => {
  return GenIcon(mailStarLine)(props);
};
var MailUnreadFillIcon = (props) => {
  return GenIcon(mailUnreadFill)(props);
};
var MailUnreadLineIcon = (props) => {
  return GenIcon(mailUnreadLine)(props);
};
var MailVolumeFillIcon = (props) => {
  return GenIcon(mailVolumeFill)(props);
};
var MailVolumeLineIcon = (props) => {
  return GenIcon(mailVolumeLine)(props);
};
var Map2FillIcon = (props) => {
  return GenIcon(map2Fill)(props);
};
var Map2LineIcon = (props) => {
  return GenIcon(map2Line)(props);
};
var MapFillIcon = (props) => {
  return GenIcon(mapFill)(props);
};
var MapLineIcon = (props) => {
  return GenIcon(mapLine)(props);
};
var MapPin2FillIcon = (props) => {
  return GenIcon(mapPin2Fill)(props);
};
var MapPin2LineIcon = (props) => {
  return GenIcon(mapPin2Line)(props);
};
var MapPin3FillIcon = (props) => {
  return GenIcon(mapPin3Fill)(props);
};
var MapPin3LineIcon = (props) => {
  return GenIcon(mapPin3Line)(props);
};
var MapPin4FillIcon = (props) => {
  return GenIcon(mapPin4Fill)(props);
};
var MapPin4LineIcon = (props) => {
  return GenIcon(mapPin4Line)(props);
};
var MapPin5FillIcon = (props) => {
  return GenIcon(mapPin5Fill)(props);
};
var MapPin5LineIcon = (props) => {
  return GenIcon(mapPin5Line)(props);
};
var MapPinAddFillIcon = (props) => {
  return GenIcon(mapPinAddFill)(props);
};
var MapPinAddLineIcon = (props) => {
  return GenIcon(mapPinAddLine)(props);
};
var MapPinFillIcon = (props) => {
  return GenIcon(mapPinFill)(props);
};
var MapPinLineIcon = (props) => {
  return GenIcon(mapPinLine)(props);
};
var MapPinRangeFillIcon = (props) => {
  return GenIcon(mapPinRangeFill)(props);
};
var MapPinRangeLineIcon = (props) => {
  return GenIcon(mapPinRangeLine)(props);
};
var MapPinTimeFillIcon = (props) => {
  return GenIcon(mapPinTimeFill)(props);
};
var MapPinTimeLineIcon = (props) => {
  return GenIcon(mapPinTimeLine)(props);
};
var MapPinUserFillIcon = (props) => {
  return GenIcon(mapPinUserFill)(props);
};
var MapPinUserLineIcon = (props) => {
  return GenIcon(mapPinUserLine)(props);
};
var MarkPenFillIcon = (props) => {
  return GenIcon(markPenFill)(props);
};
var MarkupFillIcon = (props) => {
  return GenIcon(markupFill)(props);
};
var MarkupLineIcon = (props) => {
  return GenIcon(markupLine)(props);
};
var MastercardFillIcon = (props) => {
  return GenIcon(mastercardFill)(props);
};
var MastercardLineIcon = (props) => {
  return GenIcon(mastercardLine)(props);
};
var MastodonFillIcon = (props) => {
  return GenIcon(mastodonFill)(props);
};
var MastodonLineIcon = (props) => {
  return GenIcon(mastodonLine)(props);
};
var Medal2FillIcon = (props) => {
  return GenIcon(medal2Fill)(props);
};
var Medal2LineIcon = (props) => {
  return GenIcon(medal2Line)(props);
};
var MedalFillIcon = (props) => {
  return GenIcon(medalFill)(props);
};
var MedalLineIcon = (props) => {
  return GenIcon(medalLine)(props);
};
var MedicineBottleFillIcon = (props) => {
  return GenIcon(medicineBottleFill)(props);
};
var MedicineBottleLineIcon = (props) => {
  return GenIcon(medicineBottleLine)(props);
};
var MediumFillIcon = (props) => {
  return GenIcon(mediumFill)(props);
};
var MediumLineIcon = (props) => {
  return GenIcon(mediumLine)(props);
};
var MenFillIcon = (props) => {
  return GenIcon(menFill)(props);
};
var MenLineIcon = (props) => {
  return GenIcon(menLine)(props);
};
var MentalHealthFillIcon = (props) => {
  return GenIcon(mentalHealthFill)(props);
};
var MentalHealthLineIcon = (props) => {
  return GenIcon(mentalHealthLine)(props);
};
var Menu2FillIcon = (props) => {
  return GenIcon(menu2Fill)(props);
};
var Menu2LineIcon = (props) => {
  return GenIcon(menu2Line)(props);
};
var Menu3FillIcon = (props) => {
  return GenIcon(menu3Fill)(props);
};
var Menu3LineIcon = (props) => {
  return GenIcon(menu3Line)(props);
};
var Menu4FillIcon = (props) => {
  return GenIcon(menu4Fill)(props);
};
var Menu4LineIcon = (props) => {
  return GenIcon(menu4Line)(props);
};
var Menu5FillIcon = (props) => {
  return GenIcon(menu5Fill)(props);
};
var Menu5LineIcon = (props) => {
  return GenIcon(menu5Line)(props);
};
var MenuAddFillIcon = (props) => {
  return GenIcon(menuAddFill)(props);
};
var MenuAddLineIcon = (props) => {
  return GenIcon(menuAddLine)(props);
};
var MenuFillIcon = (props) => {
  return GenIcon(menuFill)(props);
};
var MenuFoldFillIcon = (props) => {
  return GenIcon(menuFoldFill)(props);
};
var MenuFoldLineIcon = (props) => {
  return GenIcon(menuFoldLine)(props);
};
var MenuLineIcon = (props) => {
  return GenIcon(menuLine)(props);
};
var MenuUnfoldFillIcon = (props) => {
  return GenIcon(menuUnfoldFill)(props);
};
var MenuUnfoldLineIcon = (props) => {
  return GenIcon(menuUnfoldLine)(props);
};
var Message2FillIcon = (props) => {
  return GenIcon(message2Fill)(props);
};
var Message2LineIcon = (props) => {
  return GenIcon(message2Line)(props);
};
var Message3FillIcon = (props) => {
  return GenIcon(message3Fill)(props);
};
var Message3LineIcon = (props) => {
  return GenIcon(message3Line)(props);
};
var MessageFillIcon = (props) => {
  return GenIcon(messageFill)(props);
};
var MessageLineIcon = (props) => {
  return GenIcon(messageLine)(props);
};
var MessengerFillIcon = (props) => {
  return GenIcon(messengerFill)(props);
};
var MessengerLineIcon = (props) => {
  return GenIcon(messengerLine)(props);
};
var MeteorFillIcon = (props) => {
  return GenIcon(meteorFill)(props);
};
var MeteorLineIcon = (props) => {
  return GenIcon(meteorLine)(props);
};
var Mic2FillIcon = (props) => {
  return GenIcon(mic2Fill)(props);
};
var Mic2LineIcon = (props) => {
  return GenIcon(mic2Line)(props);
};
var MicFillIcon = (props) => {
  return GenIcon(micFill)(props);
};
var MicLineIcon = (props) => {
  return GenIcon(micLine)(props);
};
var MicOffFillIcon = (props) => {
  return GenIcon(micOffFill)(props);
};
var MicOffLineIcon = (props) => {
  return GenIcon(micOffLine)(props);
};
var MickeyFillIcon = (props) => {
  return GenIcon(mickeyFill)(props);
};
var MickeyLineIcon = (props) => {
  return GenIcon(mickeyLine)(props);
};
var MicroscopeFillIcon = (props) => {
  return GenIcon(microscopeFill)(props);
};
var MicroscopeLineIcon = (props) => {
  return GenIcon(microscopeLine)(props);
};
var MicrosoftFillIcon = (props) => {
  return GenIcon(microsoftFill)(props);
};
var MicrosoftLineIcon = (props) => {
  return GenIcon(microsoftLine)(props);
};
var MiniProgramFillIcon = (props) => {
  return GenIcon(miniProgramFill)(props);
};
var MiniProgramLineIcon = (props) => {
  return GenIcon(miniProgramLine)(props);
};
var MistFillIcon = (props) => {
  return GenIcon(mistFill)(props);
};
var MistLineIcon = (props) => {
  return GenIcon(mistLine)(props);
};
var MoneyCnyBoxFillIcon = (props) => {
  return GenIcon(moneyCnyBoxFill)(props);
};
var MoneyCnyBoxLineIcon = (props) => {
  return GenIcon(moneyCnyBoxLine)(props);
};
var MoneyCnyCircleFillIcon = (props) => {
  return GenIcon(moneyCnyCircleFill)(props);
};
var MoneyCnyCircleLineIcon = (props) => {
  return GenIcon(moneyCnyCircleLine)(props);
};
var MoneyDollarBoxFillIcon = (props) => {
  return GenIcon(moneyDollarBoxFill)(props);
};
var MoneyDollarBoxLineIcon = (props) => {
  return GenIcon(moneyDollarBoxLine)(props);
};
var MoneyDollarCircleFillIcon = (props) => {
  return GenIcon(moneyDollarCircleFill)(props);
};
var MoneyDollarCircleLineIcon = (props) => {
  return GenIcon(moneyDollarCircleLine)(props);
};
var MoneyEuroBoxFillIcon = (props) => {
  return GenIcon(moneyEuroBoxFill)(props);
};
var MoneyEuroBoxLineIcon = (props) => {
  return GenIcon(moneyEuroBoxLine)(props);
};
var MoneyEuroCircleFillIcon = (props) => {
  return GenIcon(moneyEuroCircleFill)(props);
};
var MoneyEuroCircleLineIcon = (props) => {
  return GenIcon(moneyEuroCircleLine)(props);
};
var MoneyPoundBoxFillIcon = (props) => {
  return GenIcon(moneyPoundBoxFill)(props);
};
var MoneyPoundBoxLineIcon = (props) => {
  return GenIcon(moneyPoundBoxLine)(props);
};
var MoneyPoundCircleFillIcon = (props) => {
  return GenIcon(moneyPoundCircleFill)(props);
};
var MoneyPoundCircleLineIcon = (props) => {
  return GenIcon(moneyPoundCircleLine)(props);
};
var MoonClearFillIcon = (props) => {
  return GenIcon(moonClearFill)(props);
};
var MoonClearLineIcon = (props) => {
  return GenIcon(moonClearLine)(props);
};
var MoonCloudyFillIcon = (props) => {
  return GenIcon(moonCloudyFill)(props);
};
var MoonCloudyLineIcon = (props) => {
  return GenIcon(moonCloudyLine)(props);
};
var MoonFillIcon = (props) => {
  return GenIcon(moonFill)(props);
};
var MoonFoggyFillIcon = (props) => {
  return GenIcon(moonFoggyFill)(props);
};
var MoonFoggyLineIcon = (props) => {
  return GenIcon(moonFoggyLine)(props);
};
var MoonLineIcon = (props) => {
  return GenIcon(moonLine)(props);
};
var More2FillIcon = (props) => {
  return GenIcon(more2Fill)(props);
};
var More2LineIcon = (props) => {
  return GenIcon(more2Line)(props);
};
var MoreLineIcon = (props) => {
  return GenIcon(moreLine)(props);
};
var MotorbikeFillIcon = (props) => {
  return GenIcon(motorbikeFill)(props);
};
var MotorbikeLineIcon = (props) => {
  return GenIcon(motorbikeLine)(props);
};
var MouseFillIcon = (props) => {
  return GenIcon(mouseFill)(props);
};
var MouseLineIcon = (props) => {
  return GenIcon(mouseLine)(props);
};
var Movie2FillIcon = (props) => {
  return GenIcon(movie2Fill)(props);
};
var Movie2LineIcon = (props) => {
  return GenIcon(movie2Line)(props);
};
var MovieFillIcon = (props) => {
  return GenIcon(movieFill)(props);
};
var MovieLineIcon = (props) => {
  return GenIcon(movieLine)(props);
};
var Music2FillIcon = (props) => {
  return GenIcon(music2Fill)(props);
};
var Music2LineIcon = (props) => {
  return GenIcon(music2Line)(props);
};
var MusicFillIcon = (props) => {
  return GenIcon(musicFill)(props);
};
var MusicLineIcon = (props) => {
  return GenIcon(musicLine)(props);
};
var MvFillIcon = (props) => {
  return GenIcon(mvFill)(props);
};
var MvLineIcon = (props) => {
  return GenIcon(mvLine)(props);
};
var NavigationFillIcon = (props) => {
  return GenIcon(navigationFill)(props);
};
var NavigationLineIcon = (props) => {
  return GenIcon(navigationLine)(props);
};
var NeteaseCloudMusicFillIcon = (props) => {
  return GenIcon(neteaseCloudMusicFill)(props);
};
var NeteaseCloudMusicLineIcon = (props) => {
  return GenIcon(neteaseCloudMusicLine)(props);
};
var NetflixFillIcon = (props) => {
  return GenIcon(netflixFill)(props);
};
var NetflixLineIcon = (props) => {
  return GenIcon(netflixLine)(props);
};
var NewspaperFillIcon = (props) => {
  return GenIcon(newspaperFill)(props);
};
var NewspaperLineIcon = (props) => {
  return GenIcon(newspaperLine)(props);
};
var Notification2FillIcon = (props) => {
  return GenIcon(notification2Fill)(props);
};
var Notification2LineIcon = (props) => {
  return GenIcon(notification2Line)(props);
};
var Notification3FillIcon = (props) => {
  return GenIcon(notification3Fill)(props);
};
var Notification3LineIcon = (props) => {
  return GenIcon(notification3Line)(props);
};
var Notification4FillIcon = (props) => {
  return GenIcon(notification4Fill)(props);
};
var Notification4LineIcon = (props) => {
  return GenIcon(notification4Line)(props);
};
var NotificationBadgeFillIcon = (props) => {
  return GenIcon(notificationBadgeFill)(props);
};
var NotificationBadgeLineIcon = (props) => {
  return GenIcon(notificationBadgeLine)(props);
};
var NotificationFillIcon = (props) => {
  return GenIcon(notificationFill)(props);
};
var NotificationLineIcon = (props) => {
  return GenIcon(notificationLine)(props);
};
var NotificationOffFillIcon = (props) => {
  return GenIcon(notificationOffFill)(props);
};
var NotificationOffLineIcon = (props) => {
  return GenIcon(notificationOffLine)(props);
};
var NpmjsFillIcon = (props) => {
  return GenIcon(npmjsFill)(props);
};
var NpmjsLineIcon = (props) => {
  return GenIcon(npmjsLine)(props);
};
var NumbersFillIcon = (props) => {
  return GenIcon(numbersFill)(props);
};
var NumbersLineIcon = (props) => {
  return GenIcon(numbersLine)(props);
};
var NurseFillIcon = (props) => {
  return GenIcon(nurseFill)(props);
};
var NurseLineIcon = (props) => {
  return GenIcon(nurseLine)(props);
};
var OilFillIcon = (props) => {
  return GenIcon(oilFill)(props);
};
var OilLineIcon = (props) => {
  return GenIcon(oilLine)(props);
};
var OpenArmFillIcon = (props) => {
  return GenIcon(openArmFill)(props);
};
var OpenArmLineIcon = (props) => {
  return GenIcon(openArmLine)(props);
};
var OpenSourceFillIcon = (props) => {
  return GenIcon(openSourceFill)(props);
};
var OpenSourceLineIcon = (props) => {
  return GenIcon(openSourceLine)(props);
};
var OperaFillIcon = (props) => {
  return GenIcon(operaFill)(props);
};
var OperaLineIcon = (props) => {
  return GenIcon(operaLine)(props);
};
var OrderPlayFillIcon = (props) => {
  return GenIcon(orderPlayFill)(props);
};
var OrderPlayLineIcon = (props) => {
  return GenIcon(orderPlayLine)(props);
};
var Outlet2FillIcon = (props) => {
  return GenIcon(outlet2Fill)(props);
};
var Outlet2LineIcon = (props) => {
  return GenIcon(outlet2Line)(props);
};
var OutletFillIcon = (props) => {
  return GenIcon(outletFill)(props);
};
var OutletLineIcon = (props) => {
  return GenIcon(outletLine)(props);
};
var PagesFillIcon = (props) => {
  return GenIcon(pagesFill)(props);
};
var PagesLineIcon = (props) => {
  return GenIcon(pagesLine)(props);
};
var PaintBrushFillIcon = (props) => {
  return GenIcon(paintBrushFill)(props);
};
var PaintBrushLineIcon = (props) => {
  return GenIcon(paintBrushLine)(props);
};
var PaintFillIcon = (props) => {
  return GenIcon(paintFill)(props);
};
var PaintLineIcon = (props) => {
  return GenIcon(paintLine)(props);
};
var PaletteFillIcon = (props) => {
  return GenIcon(paletteFill)(props);
};
var PaletteLineIcon = (props) => {
  return GenIcon(paletteLine)(props);
};
var PantoneFillIcon = (props) => {
  return GenIcon(pantoneFill)(props);
};
var PantoneLineIcon = (props) => {
  return GenIcon(pantoneLine)(props);
};
var ParentFillIcon = (props) => {
  return GenIcon(parentFill)(props);
};
var ParentLineIcon = (props) => {
  return GenIcon(parentLine)(props);
};
var ParenthesesFillIcon = (props) => {
  return GenIcon(parenthesesFill)(props);
};
var ParenthesesLineIcon = (props) => {
  return GenIcon(parenthesesLine)(props);
};
var ParkingBoxFillIcon = (props) => {
  return GenIcon(parkingBoxFill)(props);
};
var ParkingBoxLineIcon = (props) => {
  return GenIcon(parkingBoxLine)(props);
};
var ParkingFillIcon = (props) => {
  return GenIcon(parkingFill)(props);
};
var ParkingLineIcon = (props) => {
  return GenIcon(parkingLine)(props);
};
var PassportFillIcon = (props) => {
  return GenIcon(passportFill)(props);
};
var PassportLineIcon = (props) => {
  return GenIcon(passportLine)(props);
};
var PatreonFillIcon = (props) => {
  return GenIcon(patreonFill)(props);
};
var PatreonLineIcon = (props) => {
  return GenIcon(patreonLine)(props);
};
var PauseCircleFillIcon = (props) => {
  return GenIcon(pauseCircleFill)(props);
};
var PauseCircleLineIcon = (props) => {
  return GenIcon(pauseCircleLine)(props);
};
var PauseFillIcon = (props) => {
  return GenIcon(pauseFill)(props);
};
var PauseLineIcon = (props) => {
  return GenIcon(pauseLine)(props);
};
var PauseMiniFillIcon = (props) => {
  return GenIcon(pauseMiniFill)(props);
};
var PauseMiniLineIcon = (props) => {
  return GenIcon(pauseMiniLine)(props);
};
var PaypalFillIcon = (props) => {
  return GenIcon(paypalFill)(props);
};
var PaypalLineIcon = (props) => {
  return GenIcon(paypalLine)(props);
};
var PenNibFillIcon = (props) => {
  return GenIcon(penNibFill)(props);
};
var PenNibLineIcon = (props) => {
  return GenIcon(penNibLine)(props);
};
var PencilRuler2FillIcon = (props) => {
  return GenIcon(pencilRuler2Fill)(props);
};
var PencilRuler2LineIcon = (props) => {
  return GenIcon(pencilRuler2Line)(props);
};
var PencilRulerFillIcon = (props) => {
  return GenIcon(pencilRulerFill)(props);
};
var PencilRulerLineIcon = (props) => {
  return GenIcon(pencilRulerLine)(props);
};
var PercentFillIcon = (props) => {
  return GenIcon(percentFill)(props);
};
var PercentLineIcon = (props) => {
  return GenIcon(percentLine)(props);
};
var PhoneCameraFillIcon = (props) => {
  return GenIcon(phoneCameraFill)(props);
};
var PhoneCameraLineIcon = (props) => {
  return GenIcon(phoneCameraLine)(props);
};
var PhoneFillIcon = (props) => {
  return GenIcon(phoneFill)(props);
};
var PhoneFindFillIcon = (props) => {
  return GenIcon(phoneFindFill)(props);
};
var PhoneFindLineIcon = (props) => {
  return GenIcon(phoneFindLine)(props);
};
var PhoneLineIcon = (props) => {
  return GenIcon(phoneLine)(props);
};
var PhoneLockFillIcon = (props) => {
  return GenIcon(phoneLockFill)(props);
};
var PhoneLockLineIcon = (props) => {
  return GenIcon(phoneLockLine)(props);
};
var PictureInPicture2FillIcon = (props) => {
  return GenIcon(pictureInPicture2Fill)(props);
};
var PictureInPicture2LineIcon = (props) => {
  return GenIcon(pictureInPicture2Line)(props);
};
var PictureInPictureExitFillIcon = (props) => {
  return GenIcon(pictureInPictureExitFill)(props);
};
var PictureInPictureExitLineIcon = (props) => {
  return GenIcon(pictureInPictureExitLine)(props);
};
var PictureInPictureFillIcon = (props) => {
  return GenIcon(pictureInPictureFill)(props);
};
var PictureInPictureLineIcon = (props) => {
  return GenIcon(pictureInPictureLine)(props);
};
var PieChart2FillIcon = (props) => {
  return GenIcon(pieChart2Fill)(props);
};
var PieChart2LineIcon = (props) => {
  return GenIcon(pieChart2Line)(props);
};
var PieChartBoxFillIcon = (props) => {
  return GenIcon(pieChartBoxFill)(props);
};
var PieChartBoxLineIcon = (props) => {
  return GenIcon(pieChartBoxLine)(props);
};
var PieChartFillIcon = (props) => {
  return GenIcon(pieChartFill)(props);
};
var PieChartLineIcon = (props) => {
  return GenIcon(pieChartLine)(props);
};
var PinDistanceFillIcon = (props) => {
  return GenIcon(pinDistanceFill)(props);
};
var PinDistanceLineIcon = (props) => {
  return GenIcon(pinDistanceLine)(props);
};
var PingPongFillIcon = (props) => {
  return GenIcon(pingPongFill)(props);
};
var PingPongLineIcon = (props) => {
  return GenIcon(pingPongLine)(props);
};
var PinterestFillIcon = (props) => {
  return GenIcon(pinterestFill)(props);
};
var PinterestLineIcon = (props) => {
  return GenIcon(pinterestLine)(props);
};
var PixelfedFillIcon = (props) => {
  return GenIcon(pixelfedFill)(props);
};
var PixelfedLineIcon = (props) => {
  return GenIcon(pixelfedLine)(props);
};
var PlaneFillIcon = (props) => {
  return GenIcon(planeFill)(props);
};
var PlaneLineIcon = (props) => {
  return GenIcon(planeLine)(props);
};
var PlantFillIcon = (props) => {
  return GenIcon(plantFill)(props);
};
var PlantLineIcon = (props) => {
  return GenIcon(plantLine)(props);
};
var PlayCircleFillIcon = (props) => {
  return GenIcon(playCircleFill)(props);
};
var PlayCircleLineIcon = (props) => {
  return GenIcon(playCircleLine)(props);
};
var PlayFillIcon = (props) => {
  return GenIcon(playFill)(props);
};
var PlayLineIcon = (props) => {
  return GenIcon(playLine)(props);
};
var PlayList2FillIcon = (props) => {
  return GenIcon(playList2Fill)(props);
};
var PlayList2LineIcon = (props) => {
  return GenIcon(playList2Line)(props);
};
var PlayListAddFillIcon = (props) => {
  return GenIcon(playListAddFill)(props);
};
var PlayListAddLineIcon = (props) => {
  return GenIcon(playListAddLine)(props);
};
var PlayListFillIcon = (props) => {
  return GenIcon(playListFill)(props);
};
var PlayListLineIcon = (props) => {
  return GenIcon(playListLine)(props);
};
var PlayMiniFillIcon = (props) => {
  return GenIcon(playMiniFill)(props);
};
var PlayMiniLineIcon = (props) => {
  return GenIcon(playMiniLine)(props);
};
var PlaystationFillIcon = (props) => {
  return GenIcon(playstationFill)(props);
};
var PlaystationLineIcon = (props) => {
  return GenIcon(playstationLine)(props);
};
var Plug2FillIcon = (props) => {
  return GenIcon(plug2Fill)(props);
};
var Plug2LineIcon = (props) => {
  return GenIcon(plug2Line)(props);
};
var PlugFillIcon = (props) => {
  return GenIcon(plugFill)(props);
};
var PlugLineIcon = (props) => {
  return GenIcon(plugLine)(props);
};
var Polaroid2FillIcon = (props) => {
  return GenIcon(polaroid2Fill)(props);
};
var Polaroid2LineIcon = (props) => {
  return GenIcon(polaroid2Line)(props);
};
var PolaroidFillIcon = (props) => {
  return GenIcon(polaroidFill)(props);
};
var PolaroidLineIcon = (props) => {
  return GenIcon(polaroidLine)(props);
};
var PoliceCarFillIcon = (props) => {
  return GenIcon(policeCarFill)(props);
};
var PoliceCarLineIcon = (props) => {
  return GenIcon(policeCarLine)(props);
};
var PriceTag2FillIcon = (props) => {
  return GenIcon(priceTag2Fill)(props);
};
var PriceTag2LineIcon = (props) => {
  return GenIcon(priceTag2Line)(props);
};
var PriceTag3FillIcon = (props) => {
  return GenIcon(priceTag3Fill)(props);
};
var PriceTag3LineIcon = (props) => {
  return GenIcon(priceTag3Line)(props);
};
var PriceTagFillIcon = (props) => {
  return GenIcon(priceTagFill)(props);
};
var PriceTagLineIcon = (props) => {
  return GenIcon(priceTagLine)(props);
};
var PrinterCloudFillIcon = (props) => {
  return GenIcon(printerCloudFill)(props);
};
var PrinterCloudLineIcon = (props) => {
  return GenIcon(printerCloudLine)(props);
};
var PrinterFillIcon = (props) => {
  return GenIcon(printerFill)(props);
};
var PrinterLineIcon = (props) => {
  return GenIcon(printerLine)(props);
};
var ProductHuntFillIcon = (props) => {
  return GenIcon(productHuntFill)(props);
};
var ProductHuntLineIcon = (props) => {
  return GenIcon(productHuntLine)(props);
};
var ProfileFillIcon = (props) => {
  return GenIcon(profileFill)(props);
};
var ProfileLineIcon = (props) => {
  return GenIcon(profileLine)(props);
};
var Projector2FillIcon = (props) => {
  return GenIcon(projector2Fill)(props);
};
var Projector2LineIcon = (props) => {
  return GenIcon(projector2Line)(props);
};
var ProjectorFillIcon = (props) => {
  return GenIcon(projectorFill)(props);
};
var ProjectorLineIcon = (props) => {
  return GenIcon(projectorLine)(props);
};
var PsychotherapyFillIcon = (props) => {
  return GenIcon(psychotherapyFill)(props);
};
var PsychotherapyLineIcon = (props) => {
  return GenIcon(psychotherapyLine)(props);
};
var PulseFillIcon = (props) => {
  return GenIcon(pulseFill)(props);
};
var PulseLineIcon = (props) => {
  return GenIcon(pulseLine)(props);
};
var Pushpin2FillIcon = (props) => {
  return GenIcon(pushpin2Fill)(props);
};
var Pushpin2LineIcon = (props) => {
  return GenIcon(pushpin2Line)(props);
};
var PushpinFillIcon = (props) => {
  return GenIcon(pushpinFill)(props);
};
var PushpinLineIcon = (props) => {
  return GenIcon(pushpinLine)(props);
};
var QqFillIcon = (props) => {
  return GenIcon(qqFill)(props);
};
var QqLineIcon = (props) => {
  return GenIcon(qqLine)(props);
};
var QrCodeFillIcon = (props) => {
  return GenIcon(qrCodeFill)(props);
};
var QrCodeLineIcon = (props) => {
  return GenIcon(qrCodeLine)(props);
};
var QrScan2FillIcon = (props) => {
  return GenIcon(qrScan2Fill)(props);
};
var QrScan2LineIcon = (props) => {
  return GenIcon(qrScan2Line)(props);
};
var QrScanFillIcon = (props) => {
  return GenIcon(qrScanFill)(props);
};
var QrScanLineIcon = (props) => {
  return GenIcon(qrScanLine)(props);
};
var QuestionAnswerFillIcon = (props) => {
  return GenIcon(questionAnswerFill)(props);
};
var QuestionAnswerLineIcon = (props) => {
  return GenIcon(questionAnswerLine)(props);
};
var QuestionFillIcon = (props) => {
  return GenIcon(questionFill)(props);
};
var QuestionLineIcon = (props) => {
  return GenIcon(questionLine)(props);
};
var QuestionnaireFillIcon = (props) => {
  return GenIcon(questionnaireFill)(props);
};
var QuestionnaireLineIcon = (props) => {
  return GenIcon(questionnaireLine)(props);
};
var QuillPenFillIcon = (props) => {
  return GenIcon(quillPenFill)(props);
};
var QuillPenLineIcon = (props) => {
  return GenIcon(quillPenLine)(props);
};
var RadarFillIcon = (props) => {
  return GenIcon(radarFill)(props);
};
var RadarLineIcon = (props) => {
  return GenIcon(radarLine)(props);
};
var Radio2FillIcon = (props) => {
  return GenIcon(radio2Fill)(props);
};
var Radio2LineIcon = (props) => {
  return GenIcon(radio2Line)(props);
};
var RadioButtonFillIcon = (props) => {
  return GenIcon(radioButtonFill)(props);
};
var RadioButtonLineIcon = (props) => {
  return GenIcon(radioButtonLine)(props);
};
var RadioFillIcon = (props) => {
  return GenIcon(radioFill)(props);
};
var RadioLineIcon = (props) => {
  return GenIcon(radioLine)(props);
};
var RainbowFillIcon = (props) => {
  return GenIcon(rainbowFill)(props);
};
var RainbowLineIcon = (props) => {
  return GenIcon(rainbowLine)(props);
};
var RainyFillIcon = (props) => {
  return GenIcon(rainyFill)(props);
};
var RainyLineIcon = (props) => {
  return GenIcon(rainyLine)(props);
};
var ReactjsFillIcon = (props) => {
  return GenIcon(reactjsFill)(props);
};
var ReactjsLineIcon = (props) => {
  return GenIcon(reactjsLine)(props);
};
var RecordCircleFillIcon = (props) => {
  return GenIcon(recordCircleFill)(props);
};
var RecordCircleLineIcon = (props) => {
  return GenIcon(recordCircleLine)(props);
};
var RecordMailFillIcon = (props) => {
  return GenIcon(recordMailFill)(props);
};
var RecordMailLineIcon = (props) => {
  return GenIcon(recordMailLine)(props);
};
var RecycleFillIcon = (props) => {
  return GenIcon(recycleFill)(props);
};
var RecycleLineIcon = (props) => {
  return GenIcon(recycleLine)(props);
};
var RedPacketFillIcon = (props) => {
  return GenIcon(redPacketFill)(props);
};
var RedPacketLineIcon = (props) => {
  return GenIcon(redPacketLine)(props);
};
var RedditFillIcon = (props) => {
  return GenIcon(redditFill)(props);
};
var RedditLineIcon = (props) => {
  return GenIcon(redditLine)(props);
};
var RefreshFillIcon = (props) => {
  return GenIcon(refreshFill)(props);
};
var RefreshLineIcon = (props) => {
  return GenIcon(refreshLine)(props);
};
var Refund2FillIcon = (props) => {
  return GenIcon(refund2Fill)(props);
};
var Refund2LineIcon = (props) => {
  return GenIcon(refund2Line)(props);
};
var RefundFillIcon = (props) => {
  return GenIcon(refundFill)(props);
};
var RefundLineIcon = (props) => {
  return GenIcon(refundLine)(props);
};
var RegisteredFillIcon = (props) => {
  return GenIcon(registeredFill)(props);
};
var RegisteredLineIcon = (props) => {
  return GenIcon(registeredLine)(props);
};
var RemixiconFillIcon = (props) => {
  return GenIcon(remixiconFill)(props);
};
var RemixiconLineIcon = (props) => {
  return GenIcon(remixiconLine)(props);
};
var RemoteControl2FillIcon = (props) => {
  return GenIcon(remoteControl2Fill)(props);
};
var RemoteControl2LineIcon = (props) => {
  return GenIcon(remoteControl2Line)(props);
};
var RemoteControlFillIcon = (props) => {
  return GenIcon(remoteControlFill)(props);
};
var RemoteControlLineIcon = (props) => {
  return GenIcon(remoteControlLine)(props);
};
var Repeat2FillIcon = (props) => {
  return GenIcon(repeat2Fill)(props);
};
var Repeat2LineIcon = (props) => {
  return GenIcon(repeat2Line)(props);
};
var RepeatFillIcon = (props) => {
  return GenIcon(repeatFill)(props);
};
var RepeatLineIcon = (props) => {
  return GenIcon(repeatLine)(props);
};
var RepeatOneFillIcon = (props) => {
  return GenIcon(repeatOneFill)(props);
};
var RepeatOneLineIcon = (props) => {
  return GenIcon(repeatOneLine)(props);
};
var ReplyAllFillIcon = (props) => {
  return GenIcon(replyAllFill)(props);
};
var ReplyAllLineIcon = (props) => {
  return GenIcon(replyAllLine)(props);
};
var ReplyFillIcon = (props) => {
  return GenIcon(replyFill)(props);
};
var ReplyLineIcon = (props) => {
  return GenIcon(replyLine)(props);
};
var ReservedFillIcon = (props) => {
  return GenIcon(reservedFill)(props);
};
var ReservedLineIcon = (props) => {
  return GenIcon(reservedLine)(props);
};
var RestTimeFillIcon = (props) => {
  return GenIcon(restTimeFill)(props);
};
var RestTimeLineIcon = (props) => {
  return GenIcon(restTimeLine)(props);
};
var RestartFillIcon = (props) => {
  return GenIcon(restartFill)(props);
};
var RestartLineIcon = (props) => {
  return GenIcon(restartLine)(props);
};
var Restaurant2FillIcon = (props) => {
  return GenIcon(restaurant2Fill)(props);
};
var Restaurant2LineIcon = (props) => {
  return GenIcon(restaurant2Line)(props);
};
var RestaurantFillIcon = (props) => {
  return GenIcon(restaurantFill)(props);
};
var RestaurantLineIcon = (props) => {
  return GenIcon(restaurantLine)(props);
};
var RewindFillIcon = (props) => {
  return GenIcon(rewindFill)(props);
};
var RewindLineIcon = (props) => {
  return GenIcon(rewindLine)(props);
};
var RewindMiniFillIcon = (props) => {
  return GenIcon(rewindMiniFill)(props);
};
var RewindMiniLineIcon = (props) => {
  return GenIcon(rewindMiniLine)(props);
};
var RhythmFillIcon = (props) => {
  return GenIcon(rhythmFill)(props);
};
var RhythmLineIcon = (props) => {
  return GenIcon(rhythmLine)(props);
};
var RidingFillIcon = (props) => {
  return GenIcon(ridingFill)(props);
};
var RidingLineIcon = (props) => {
  return GenIcon(ridingLine)(props);
};
var RoadMapFillIcon = (props) => {
  return GenIcon(roadMapFill)(props);
};
var RoadMapLineIcon = (props) => {
  return GenIcon(roadMapLine)(props);
};
var RoadsterFillIcon = (props) => {
  return GenIcon(roadsterFill)(props);
};
var RoadsterLineIcon = (props) => {
  return GenIcon(roadsterLine)(props);
};
var RobotFillIcon = (props) => {
  return GenIcon(robotFill)(props);
};
var RobotLineIcon = (props) => {
  return GenIcon(robotLine)(props);
};
var Rocket2FillIcon = (props) => {
  return GenIcon(rocket2Fill)(props);
};
var Rocket2LineIcon = (props) => {
  return GenIcon(rocket2Line)(props);
};
var RocketFillIcon = (props) => {
  return GenIcon(rocketFill)(props);
};
var RocketLineIcon = (props) => {
  return GenIcon(rocketLine)(props);
};
var RotateLockFillIcon = (props) => {
  return GenIcon(rotateLockFill)(props);
};
var RotateLockLineIcon = (props) => {
  return GenIcon(rotateLockLine)(props);
};
var RouteFillIcon = (props) => {
  return GenIcon(routeFill)(props);
};
var RouteLineIcon = (props) => {
  return GenIcon(routeLine)(props);
};
var RouterFillIcon = (props) => {
  return GenIcon(routerFill)(props);
};
var RouterLineIcon = (props) => {
  return GenIcon(routerLine)(props);
};
var RssFillIcon = (props) => {
  return GenIcon(rssFill)(props);
};
var RssLineIcon = (props) => {
  return GenIcon(rssLine)(props);
};
var Ruler2FillIcon = (props) => {
  return GenIcon(ruler2Fill)(props);
};
var Ruler2LineIcon = (props) => {
  return GenIcon(ruler2Line)(props);
};
var RulerFillIcon = (props) => {
  return GenIcon(rulerFill)(props);
};
var RulerLineIcon = (props) => {
  return GenIcon(rulerLine)(props);
};
var RunFillIcon = (props) => {
  return GenIcon(runFill)(props);
};
var RunLineIcon = (props) => {
  return GenIcon(runLine)(props);
};
var SafariFillIcon = (props) => {
  return GenIcon(safariFill)(props);
};
var SafariLineIcon = (props) => {
  return GenIcon(safariLine)(props);
};
var Safe2FillIcon = (props) => {
  return GenIcon(safe2Fill)(props);
};
var Safe2LineIcon = (props) => {
  return GenIcon(safe2Line)(props);
};
var SafeFillIcon = (props) => {
  return GenIcon(safeFill)(props);
};
var SafeLineIcon = (props) => {
  return GenIcon(safeLine)(props);
};
var SailboatFillIcon = (props) => {
  return GenIcon(sailboatFill)(props);
};
var SailboatLineIcon = (props) => {
  return GenIcon(sailboatLine)(props);
};
var Save2FillIcon = (props) => {
  return GenIcon(save2Fill)(props);
};
var Save2LineIcon = (props) => {
  return GenIcon(save2Line)(props);
};
var Save3FillIcon = (props) => {
  return GenIcon(save3Fill)(props);
};
var Save3LineIcon = (props) => {
  return GenIcon(save3Line)(props);
};
var SaveFillIcon = (props) => {
  return GenIcon(saveFill)(props);
};
var SaveLineIcon = (props) => {
  return GenIcon(saveLine)(props);
};
var Scales2FillIcon = (props) => {
  return GenIcon(scales2Fill)(props);
};
var Scales2LineIcon = (props) => {
  return GenIcon(scales2Line)(props);
};
var Scales3FillIcon = (props) => {
  return GenIcon(scales3Fill)(props);
};
var Scales3LineIcon = (props) => {
  return GenIcon(scales3Line)(props);
};
var ScalesFillIcon = (props) => {
  return GenIcon(scalesFill)(props);
};
var ScalesLineIcon = (props) => {
  return GenIcon(scalesLine)(props);
};
var Scan2FillIcon = (props) => {
  return GenIcon(scan2Fill)(props);
};
var Scan2LineIcon = (props) => {
  return GenIcon(scan2Line)(props);
};
var ScanFillIcon = (props) => {
  return GenIcon(scanFill)(props);
};
var ScanLineIcon = (props) => {
  return GenIcon(scanLine)(props);
};
var Scissors2FillIcon = (props) => {
  return GenIcon(scissors2Fill)(props);
};
var Scissors2LineIcon = (props) => {
  return GenIcon(scissors2Line)(props);
};
var ScissorsCutFillIcon = (props) => {
  return GenIcon(scissorsCutFill)(props);
};
var ScissorsCutLineIcon = (props) => {
  return GenIcon(scissorsCutLine)(props);
};
var ScissorsLineIcon = (props) => {
  return GenIcon(scissorsLine)(props);
};
var Screenshot2FillIcon = (props) => {
  return GenIcon(screenshot2Fill)(props);
};
var Screenshot2LineIcon = (props) => {
  return GenIcon(screenshot2Line)(props);
};
var ScreenshotFillIcon = (props) => {
  return GenIcon(screenshotFill)(props);
};
var ScreenshotLineIcon = (props) => {
  return GenIcon(screenshotLine)(props);
};
var SdCardFillIcon = (props) => {
  return GenIcon(sdCardFill)(props);
};
var SdCardLineIcon = (props) => {
  return GenIcon(sdCardLine)(props);
};
var SdCardMiniFillIcon = (props) => {
  return GenIcon(sdCardMiniFill)(props);
};
var SdCardMiniLineIcon = (props) => {
  return GenIcon(sdCardMiniLine)(props);
};
var Search2FillIcon = (props) => {
  return GenIcon(search2Fill)(props);
};
var Search2LineIcon = (props) => {
  return GenIcon(search2Line)(props);
};
var SearchEyeFillIcon = (props) => {
  return GenIcon(searchEyeFill)(props);
};
var SearchEyeLineIcon = (props) => {
  return GenIcon(searchEyeLine)(props);
};
var SearchFillIcon = (props) => {
  return GenIcon(searchFill)(props);
};
var SecurePaymentFillIcon = (props) => {
  return GenIcon(securePaymentFill)(props);
};
var SecurePaymentLineIcon = (props) => {
  return GenIcon(securePaymentLine)(props);
};
var SeedlingFillIcon = (props) => {
  return GenIcon(seedlingFill)(props);
};
var SeedlingLineIcon = (props) => {
  return GenIcon(seedlingLine)(props);
};
var SendPlane2FillIcon = (props) => {
  return GenIcon(sendPlane2Fill)(props);
};
var SendPlane2LineIcon = (props) => {
  return GenIcon(sendPlane2Line)(props);
};
var SendPlaneFillIcon = (props) => {
  return GenIcon(sendPlaneFill)(props);
};
var SendPlaneLineIcon = (props) => {
  return GenIcon(sendPlaneLine)(props);
};
var SensorFillIcon = (props) => {
  return GenIcon(sensorFill)(props);
};
var SensorLineIcon = (props) => {
  return GenIcon(sensorLine)(props);
};
var ServerFillIcon = (props) => {
  return GenIcon(serverFill)(props);
};
var ServerLineIcon = (props) => {
  return GenIcon(serverLine)(props);
};
var ServiceFillIcon = (props) => {
  return GenIcon(serviceFill)(props);
};
var ServiceLineIcon = (props) => {
  return GenIcon(serviceLine)(props);
};
var Settings2FillIcon = (props) => {
  return GenIcon(settings2Fill)(props);
};
var Settings2LineIcon = (props) => {
  return GenIcon(settings2Line)(props);
};
var Settings3FillIcon = (props) => {
  return GenIcon(settings3Fill)(props);
};
var Settings3LineIcon = (props) => {
  return GenIcon(settings3Line)(props);
};
var Settings4FillIcon = (props) => {
  return GenIcon(settings4Fill)(props);
};
var Settings4LineIcon = (props) => {
  return GenIcon(settings4Line)(props);
};
var Settings5FillIcon = (props) => {
  return GenIcon(settings5Fill)(props);
};
var Settings5LineIcon = (props) => {
  return GenIcon(settings5Line)(props);
};
var Settings6FillIcon = (props) => {
  return GenIcon(settings6Fill)(props);
};
var Settings6LineIcon = (props) => {
  return GenIcon(settings6Line)(props);
};
var SettingsFillIcon = (props) => {
  return GenIcon(settingsFill)(props);
};
var SettingsLineIcon = (props) => {
  return GenIcon(settingsLine)(props);
};
var Shape2FillIcon = (props) => {
  return GenIcon(shape2Fill)(props);
};
var Shape2LineIcon = (props) => {
  return GenIcon(shape2Line)(props);
};
var ShapeFillIcon = (props) => {
  return GenIcon(shapeFill)(props);
};
var ShapeLineIcon = (props) => {
  return GenIcon(shapeLine)(props);
};
var ShareBoxFillIcon = (props) => {
  return GenIcon(shareBoxFill)(props);
};
var ShareBoxLineIcon = (props) => {
  return GenIcon(shareBoxLine)(props);
};
var ShareCircleFillIcon = (props) => {
  return GenIcon(shareCircleFill)(props);
};
var ShareCircleLineIcon = (props) => {
  return GenIcon(shareCircleLine)(props);
};
var ShareFillIcon = (props) => {
  return GenIcon(shareFill)(props);
};
var ShareForward2FillIcon = (props) => {
  return GenIcon(shareForward2Fill)(props);
};
var ShareForward2LineIcon = (props) => {
  return GenIcon(shareForward2Line)(props);
};
var ShareForwardBoxFillIcon = (props) => {
  return GenIcon(shareForwardBoxFill)(props);
};
var ShareForwardBoxLineIcon = (props) => {
  return GenIcon(shareForwardBoxLine)(props);
};
var ShareForwardFillIcon = (props) => {
  return GenIcon(shareForwardFill)(props);
};
var ShareForwardLineIcon = (props) => {
  return GenIcon(shareForwardLine)(props);
};
var ShareLineIcon = (props) => {
  return GenIcon(shareLine)(props);
};
var ShieldCheckFillIcon = (props) => {
  return GenIcon(shieldCheckFill)(props);
};
var ShieldCheckLineIcon = (props) => {
  return GenIcon(shieldCheckLine)(props);
};
var ShieldCrossFillIcon = (props) => {
  return GenIcon(shieldCrossFill)(props);
};
var ShieldCrossLineIcon = (props) => {
  return GenIcon(shieldCrossLine)(props);
};
var ShieldFillIcon = (props) => {
  return GenIcon(shieldFill)(props);
};
var ShieldFlashFillIcon = (props) => {
  return GenIcon(shieldFlashFill)(props);
};
var ShieldFlashLineIcon = (props) => {
  return GenIcon(shieldFlashLine)(props);
};
var ShieldKeyholeFillIcon = (props) => {
  return GenIcon(shieldKeyholeFill)(props);
};
var ShieldKeyholeLineIcon = (props) => {
  return GenIcon(shieldKeyholeLine)(props);
};
var ShieldLineIcon = (props) => {
  return GenIcon(shieldLine)(props);
};
var ShieldStarFillIcon = (props) => {
  return GenIcon(shieldStarFill)(props);
};
var ShieldStarLineIcon = (props) => {
  return GenIcon(shieldStarLine)(props);
};
var ShieldUserFillIcon = (props) => {
  return GenIcon(shieldUserFill)(props);
};
var ShieldUserLineIcon = (props) => {
  return GenIcon(shieldUserLine)(props);
};
var Ship2FillIcon = (props) => {
  return GenIcon(ship2Fill)(props);
};
var Ship2LineIcon = (props) => {
  return GenIcon(ship2Line)(props);
};
var ShipFillIcon = (props) => {
  return GenIcon(shipFill)(props);
};
var ShipLineIcon = (props) => {
  return GenIcon(shipLine)(props);
};
var ShirtFillIcon = (props) => {
  return GenIcon(shirtFill)(props);
};
var ShirtLineIcon = (props) => {
  return GenIcon(shirtLine)(props);
};
var ShoppingBag2FillIcon = (props) => {
  return GenIcon(shoppingBag2Fill)(props);
};
var ShoppingBag2LineIcon = (props) => {
  return GenIcon(shoppingBag2Line)(props);
};
var ShoppingBag3FillIcon = (props) => {
  return GenIcon(shoppingBag3Fill)(props);
};
var ShoppingBag3LineIcon = (props) => {
  return GenIcon(shoppingBag3Line)(props);
};
var ShoppingBagFillIcon = (props) => {
  return GenIcon(shoppingBagFill)(props);
};
var ShoppingBagLineIcon = (props) => {
  return GenIcon(shoppingBagLine)(props);
};
var ShoppingBasket2FillIcon = (props) => {
  return GenIcon(shoppingBasket2Fill)(props);
};
var ShoppingBasket2LineIcon = (props) => {
  return GenIcon(shoppingBasket2Line)(props);
};
var ShoppingBasketFillIcon = (props) => {
  return GenIcon(shoppingBasketFill)(props);
};
var ShoppingBasketLineIcon = (props) => {
  return GenIcon(shoppingBasketLine)(props);
};
var ShoppingCart2FillIcon = (props) => {
  return GenIcon(shoppingCart2Fill)(props);
};
var ShoppingCart2LineIcon = (props) => {
  return GenIcon(shoppingCart2Line)(props);
};
var ShoppingCartFillIcon = (props) => {
  return GenIcon(shoppingCartFill)(props);
};
var ShoppingCartLineIcon = (props) => {
  return GenIcon(shoppingCartLine)(props);
};
var ShowersFillIcon = (props) => {
  return GenIcon(showersFill)(props);
};
var ShowersLineIcon = (props) => {
  return GenIcon(showersLine)(props);
};
var ShuffleFillIcon = (props) => {
  return GenIcon(shuffleFill)(props);
};
var ShuffleLineIcon = (props) => {
  return GenIcon(shuffleLine)(props);
};
var ShutDownFillIcon = (props) => {
  return GenIcon(shutDownFill)(props);
};
var ShutDownLineIcon = (props) => {
  return GenIcon(shutDownLine)(props);
};
var SideBarFillIcon = (props) => {
  return GenIcon(sideBarFill)(props);
};
var SideBarLineIcon = (props) => {
  return GenIcon(sideBarLine)(props);
};
var SignalTowerFillIcon = (props) => {
  return GenIcon(signalTowerFill)(props);
};
var SignalTowerLineIcon = (props) => {
  return GenIcon(signalTowerLine)(props);
};
var SignalWifi1FillIcon = (props) => {
  return GenIcon(signalWifi1Fill)(props);
};
var SignalWifi1LineIcon = (props) => {
  return GenIcon(signalWifi1Line)(props);
};
var SignalWifi2FillIcon = (props) => {
  return GenIcon(signalWifi2Fill)(props);
};
var SignalWifi2LineIcon = (props) => {
  return GenIcon(signalWifi2Line)(props);
};
var SignalWifi3FillIcon = (props) => {
  return GenIcon(signalWifi3Fill)(props);
};
var SignalWifi3LineIcon = (props) => {
  return GenIcon(signalWifi3Line)(props);
};
var SignalWifiErrorFillIcon = (props) => {
  return GenIcon(signalWifiErrorFill)(props);
};
var SignalWifiErrorLineIcon = (props) => {
  return GenIcon(signalWifiErrorLine)(props);
};
var SignalWifiFillIcon = (props) => {
  return GenIcon(signalWifiFill)(props);
};
var SignalWifiLineIcon = (props) => {
  return GenIcon(signalWifiLine)(props);
};
var SignalWifiOffFillIcon = (props) => {
  return GenIcon(signalWifiOffFill)(props);
};
var SignalWifiOffLineIcon = (props) => {
  return GenIcon(signalWifiOffLine)(props);
};
var SimCard2FillIcon = (props) => {
  return GenIcon(simCard2Fill)(props);
};
var SimCard2LineIcon = (props) => {
  return GenIcon(simCard2Line)(props);
};
var SimCardFillIcon = (props) => {
  return GenIcon(simCardFill)(props);
};
var SimCardLineIcon = (props) => {
  return GenIcon(simCardLine)(props);
};
var SipFillIcon = (props) => {
  return GenIcon(sipFill)(props);
};
var SipLineIcon = (props) => {
  return GenIcon(sipLine)(props);
};
var SkipBackFillIcon = (props) => {
  return GenIcon(skipBackFill)(props);
};
var SkipBackLineIcon = (props) => {
  return GenIcon(skipBackLine)(props);
};
var SkipBackMiniFillIcon = (props) => {
  return GenIcon(skipBackMiniFill)(props);
};
var SkipBackMiniLineIcon = (props) => {
  return GenIcon(skipBackMiniLine)(props);
};
var SkipForwardFillIcon = (props) => {
  return GenIcon(skipForwardFill)(props);
};
var SkipForwardLineIcon = (props) => {
  return GenIcon(skipForwardLine)(props);
};
var SkipForwardMiniFillIcon = (props) => {
  return GenIcon(skipForwardMiniFill)(props);
};
var SkipForwardMiniLineIcon = (props) => {
  return GenIcon(skipForwardMiniLine)(props);
};
var Skull2FillIcon = (props) => {
  return GenIcon(skull2Fill)(props);
};
var Skull2LineIcon = (props) => {
  return GenIcon(skull2Line)(props);
};
var SkullFillIcon = (props) => {
  return GenIcon(skullFill)(props);
};
var SkullLineIcon = (props) => {
  return GenIcon(skullLine)(props);
};
var SkypeFillIcon = (props) => {
  return GenIcon(skypeFill)(props);
};
var SkypeLineIcon = (props) => {
  return GenIcon(skypeLine)(props);
};
var SlackFillIcon = (props) => {
  return GenIcon(slackFill)(props);
};
var SlackLineIcon = (props) => {
  return GenIcon(slackLine)(props);
};
var SliceFillIcon = (props) => {
  return GenIcon(sliceFill)(props);
};
var SliceLineIcon = (props) => {
  return GenIcon(sliceLine)(props);
};
var Slideshow2FillIcon = (props) => {
  return GenIcon(slideshow2Fill)(props);
};
var Slideshow2LineIcon = (props) => {
  return GenIcon(slideshow2Line)(props);
};
var Slideshow3FillIcon = (props) => {
  return GenIcon(slideshow3Fill)(props);
};
var Slideshow3LineIcon = (props) => {
  return GenIcon(slideshow3Line)(props);
};
var Slideshow4FillIcon = (props) => {
  return GenIcon(slideshow4Fill)(props);
};
var Slideshow4LineIcon = (props) => {
  return GenIcon(slideshow4Line)(props);
};
var SlideshowFillIcon = (props) => {
  return GenIcon(slideshowFill)(props);
};
var SlideshowLineIcon = (props) => {
  return GenIcon(slideshowLine)(props);
};
var SmartphoneFillIcon = (props) => {
  return GenIcon(smartphoneFill)(props);
};
var SmartphoneLineIcon = (props) => {
  return GenIcon(smartphoneLine)(props);
};
var SnapchatFillIcon = (props) => {
  return GenIcon(snapchatFill)(props);
};
var SnapchatLineIcon = (props) => {
  return GenIcon(snapchatLine)(props);
};
var SnowyFillIcon = (props) => {
  return GenIcon(snowyFill)(props);
};
var SnowyLineIcon = (props) => {
  return GenIcon(snowyLine)(props);
};
var SoundModuleFillIcon = (props) => {
  return GenIcon(soundModuleFill)(props);
};
var SoundModuleLineIcon = (props) => {
  return GenIcon(soundModuleLine)(props);
};
var SoundcloudFillIcon = (props) => {
  return GenIcon(soundcloudFill)(props);
};
var SoundcloudLineIcon = (props) => {
  return GenIcon(soundcloudLine)(props);
};
var SpaceShipFillIcon = (props) => {
  return GenIcon(spaceShipFill)(props);
};
var SpaceShipLineIcon = (props) => {
  return GenIcon(spaceShipLine)(props);
};
var Spam2FillIcon = (props) => {
  return GenIcon(spam2Fill)(props);
};
var Spam2LineIcon = (props) => {
  return GenIcon(spam2Line)(props);
};
var Spam3FillIcon = (props) => {
  return GenIcon(spam3Fill)(props);
};
var Spam3LineIcon = (props) => {
  return GenIcon(spam3Line)(props);
};
var SpamFillIcon = (props) => {
  return GenIcon(spamFill)(props);
};
var Speaker2FillIcon = (props) => {
  return GenIcon(speaker2Fill)(props);
};
var Speaker2LineIcon = (props) => {
  return GenIcon(speaker2Line)(props);
};
var Speaker3FillIcon = (props) => {
  return GenIcon(speaker3Fill)(props);
};
var Speaker3LineIcon = (props) => {
  return GenIcon(speaker3Line)(props);
};
var SpeakerFillIcon = (props) => {
  return GenIcon(speakerFill)(props);
};
var SpeakerLineIcon = (props) => {
  return GenIcon(speakerLine)(props);
};
var SpectrumFillIcon = (props) => {
  return GenIcon(spectrumFill)(props);
};
var SpectrumLineIcon = (props) => {
  return GenIcon(spectrumLine)(props);
};
var SpeedFillIcon = (props) => {
  return GenIcon(speedFill)(props);
};
var SpeedLineIcon = (props) => {
  return GenIcon(speedLine)(props);
};
var SpeedMiniFillIcon = (props) => {
  return GenIcon(speedMiniFill)(props);
};
var SpeedMiniLineIcon = (props) => {
  return GenIcon(speedMiniLine)(props);
};
var SpotifyFillIcon = (props) => {
  return GenIcon(spotifyFill)(props);
};
var SpotifyLineIcon = (props) => {
  return GenIcon(spotifyLine)(props);
};
var SpyFillIcon = (props) => {
  return GenIcon(spyFill)(props);
};
var SpyLineIcon = (props) => {
  return GenIcon(spyLine)(props);
};
var StackFillIcon = (props) => {
  return GenIcon(stackFill)(props);
};
var StackLineIcon = (props) => {
  return GenIcon(stackLine)(props);
};
var StackOverflowFillIcon = (props) => {
  return GenIcon(stackOverflowFill)(props);
};
var StackOverflowLineIcon = (props) => {
  return GenIcon(stackOverflowLine)(props);
};
var StackshareFillIcon = (props) => {
  return GenIcon(stackshareFill)(props);
};
var StackshareLineIcon = (props) => {
  return GenIcon(stackshareLine)(props);
};
var StarFillIcon = (props) => {
  return GenIcon(starFill)(props);
};
var StarHalfFillIcon = (props) => {
  return GenIcon(starHalfFill)(props);
};
var StarHalfLineIcon = (props) => {
  return GenIcon(starHalfLine)(props);
};
var StarHalfSFillIcon = (props) => {
  return GenIcon(starHalfSFill)(props);
};
var StarHalfSLineIcon = (props) => {
  return GenIcon(starHalfSLine)(props);
};
var StarLineIcon = (props) => {
  return GenIcon(starLine)(props);
};
var StarSFillIcon = (props) => {
  return GenIcon(starSFill)(props);
};
var StarSLineIcon = (props) => {
  return GenIcon(starSLine)(props);
};
var StarSmileFillIcon = (props) => {
  return GenIcon(starSmileFill)(props);
};
var StarSmileLineIcon = (props) => {
  return GenIcon(starSmileLine)(props);
};
var SteamFillIcon = (props) => {
  return GenIcon(steamFill)(props);
};
var SteamLineIcon = (props) => {
  return GenIcon(steamLine)(props);
};
var Steering2FillIcon = (props) => {
  return GenIcon(steering2Fill)(props);
};
var Steering2LineIcon = (props) => {
  return GenIcon(steering2Line)(props);
};
var SteeringFillIcon = (props) => {
  return GenIcon(steeringFill)(props);
};
var SteeringLineIcon = (props) => {
  return GenIcon(steeringLine)(props);
};
var StethoscopeFillIcon = (props) => {
  return GenIcon(stethoscopeFill)(props);
};
var StethoscopeLineIcon = (props) => {
  return GenIcon(stethoscopeLine)(props);
};
var StickyNote2FillIcon = (props) => {
  return GenIcon(stickyNote2Fill)(props);
};
var StickyNote2LineIcon = (props) => {
  return GenIcon(stickyNote2Line)(props);
};
var StickyNoteFillIcon = (props) => {
  return GenIcon(stickyNoteFill)(props);
};
var StickyNoteLineIcon = (props) => {
  return GenIcon(stickyNoteLine)(props);
};
var StockFillIcon = (props) => {
  return GenIcon(stockFill)(props);
};
var StockLineIcon = (props) => {
  return GenIcon(stockLine)(props);
};
var StopCircleFillIcon = (props) => {
  return GenIcon(stopCircleFill)(props);
};
var StopCircleLineIcon = (props) => {
  return GenIcon(stopCircleLine)(props);
};
var StopFillIcon = (props) => {
  return GenIcon(stopFill)(props);
};
var StopLineIcon = (props) => {
  return GenIcon(stopLine)(props);
};
var StopMiniFillIcon = (props) => {
  return GenIcon(stopMiniFill)(props);
};
var StopMiniLineIcon = (props) => {
  return GenIcon(stopMiniLine)(props);
};
var Store2FillIcon = (props) => {
  return GenIcon(store2Fill)(props);
};
var Store2LineIcon = (props) => {
  return GenIcon(store2Line)(props);
};
var Store3FillIcon = (props) => {
  return GenIcon(store3Fill)(props);
};
var Store3LineIcon = (props) => {
  return GenIcon(store3Line)(props);
};
var StoreFillIcon = (props) => {
  return GenIcon(storeFill)(props);
};
var StoreLineIcon = (props) => {
  return GenIcon(storeLine)(props);
};
var SubtractFillIcon = (props) => {
  return GenIcon(subtractFill)(props);
};
var SubwayFillIcon = (props) => {
  return GenIcon(subwayFill)(props);
};
var SubwayLineIcon = (props) => {
  return GenIcon(subwayLine)(props);
};
var SubwayWifiFillIcon = (props) => {
  return GenIcon(subwayWifiFill)(props);
};
var SubwayWifiLineIcon = (props) => {
  return GenIcon(subwayWifiLine)(props);
};
var Suitcase2FillIcon = (props) => {
  return GenIcon(suitcase2Fill)(props);
};
var Suitcase2LineIcon = (props) => {
  return GenIcon(suitcase2Line)(props);
};
var Suitcase3FillIcon = (props) => {
  return GenIcon(suitcase3Fill)(props);
};
var Suitcase3LineIcon = (props) => {
  return GenIcon(suitcase3Line)(props);
};
var SuitcaseFillIcon = (props) => {
  return GenIcon(suitcaseFill)(props);
};
var SuitcaseLineIcon = (props) => {
  return GenIcon(suitcaseLine)(props);
};
var SunCloudyFillIcon = (props) => {
  return GenIcon(sunCloudyFill)(props);
};
var SunCloudyLineIcon = (props) => {
  return GenIcon(sunCloudyLine)(props);
};
var SunFillIcon = (props) => {
  return GenIcon(sunFill)(props);
};
var SunFoggyFillIcon = (props) => {
  return GenIcon(sunFoggyFill)(props);
};
var SunFoggyLineIcon = (props) => {
  return GenIcon(sunFoggyLine)(props);
};
var SunLineIcon = (props) => {
  return GenIcon(sunLine)(props);
};
var SurgicalMaskFillIcon = (props) => {
  return GenIcon(surgicalMaskFill)(props);
};
var SurgicalMaskLineIcon = (props) => {
  return GenIcon(surgicalMaskLine)(props);
};
var SurroundSoundFillIcon = (props) => {
  return GenIcon(surroundSoundFill)(props);
};
var SurroundSoundLineIcon = (props) => {
  return GenIcon(surroundSoundLine)(props);
};
var SurveyFillIcon = (props) => {
  return GenIcon(surveyFill)(props);
};
var SurveyLineIcon = (props) => {
  return GenIcon(surveyLine)(props);
};
var SwapBoxFillIcon = (props) => {
  return GenIcon(swapBoxFill)(props);
};
var SwapBoxLineIcon = (props) => {
  return GenIcon(swapBoxLine)(props);
};
var SwapFillIcon = (props) => {
  return GenIcon(swapFill)(props);
};
var SwapLineIcon = (props) => {
  return GenIcon(swapLine)(props);
};
var SwitchFillIcon = (props) => {
  return GenIcon(switchFill)(props);
};
var SwitchLineIcon = (props) => {
  return GenIcon(switchLine)(props);
};
var SwordFillIcon = (props) => {
  return GenIcon(swordFill)(props);
};
var SwordLineIcon = (props) => {
  return GenIcon(swordLine)(props);
};
var SyringeFillIcon = (props) => {
  return GenIcon(syringeFill)(props);
};
var SyringeLineIcon = (props) => {
  return GenIcon(syringeLine)(props);
};
var TBoxFillIcon = (props) => {
  return GenIcon(tBoxFill)(props);
};
var TBoxLineIcon = (props) => {
  return GenIcon(tBoxLine)(props);
};
var TShirt2FillIcon = (props) => {
  return GenIcon(tShirt2Fill)(props);
};
var TShirt2LineIcon = (props) => {
  return GenIcon(tShirt2Line)(props);
};
var TShirtAirFillIcon = (props) => {
  return GenIcon(tShirtAirFill)(props);
};
var TShirtAirLineIcon = (props) => {
  return GenIcon(tShirtAirLine)(props);
};
var TShirtFillIcon = (props) => {
  return GenIcon(tShirtFill)(props);
};
var TShirtLineIcon = (props) => {
  return GenIcon(tShirtLine)(props);
};
var TableAltFillIcon = (props) => {
  return GenIcon(tableAltFill)(props);
};
var TableAltLineIcon = (props) => {
  return GenIcon(tableAltLine)(props);
};
var TableFillIcon = (props) => {
  return GenIcon(tableFill)(props);
};
var TabletFillIcon = (props) => {
  return GenIcon(tabletFill)(props);
};
var TabletLineIcon = (props) => {
  return GenIcon(tabletLine)(props);
};
var TakeawayFillIcon = (props) => {
  return GenIcon(takeawayFill)(props);
};
var TakeawayLineIcon = (props) => {
  return GenIcon(takeawayLine)(props);
};
var TaobaoFillIcon = (props) => {
  return GenIcon(taobaoFill)(props);
};
var TaobaoLineIcon = (props) => {
  return GenIcon(taobaoLine)(props);
};
var TapeFillIcon = (props) => {
  return GenIcon(tapeFill)(props);
};
var TapeLineIcon = (props) => {
  return GenIcon(tapeLine)(props);
};
var TaskFillIcon = (props) => {
  return GenIcon(taskFill)(props);
};
var TaskLineIcon = (props) => {
  return GenIcon(taskLine)(props);
};
var TaxiFillIcon = (props) => {
  return GenIcon(taxiFill)(props);
};
var TaxiLineIcon = (props) => {
  return GenIcon(taxiLine)(props);
};
var TaxiWifiFillIcon = (props) => {
  return GenIcon(taxiWifiFill)(props);
};
var TaxiWifiLineIcon = (props) => {
  return GenIcon(taxiWifiLine)(props);
};
var TeamFillIcon = (props) => {
  return GenIcon(teamFill)(props);
};
var TeamLineIcon = (props) => {
  return GenIcon(teamLine)(props);
};
var TelegramFillIcon = (props) => {
  return GenIcon(telegramFill)(props);
};
var TelegramLineIcon = (props) => {
  return GenIcon(telegramLine)(props);
};
var TempColdFillIcon = (props) => {
  return GenIcon(tempColdFill)(props);
};
var TempColdLineIcon = (props) => {
  return GenIcon(tempColdLine)(props);
};
var TempHotFillIcon = (props) => {
  return GenIcon(tempHotFill)(props);
};
var TempHotLineIcon = (props) => {
  return GenIcon(tempHotLine)(props);
};
var TerminalBoxFillIcon = (props) => {
  return GenIcon(terminalBoxFill)(props);
};
var TerminalBoxLineIcon = (props) => {
  return GenIcon(terminalBoxLine)(props);
};
var TerminalFillIcon = (props) => {
  return GenIcon(terminalFill)(props);
};
var TerminalLineIcon = (props) => {
  return GenIcon(terminalLine)(props);
};
var TerminalWindowFillIcon = (props) => {
  return GenIcon(terminalWindowFill)(props);
};
var TerminalWindowLineIcon = (props) => {
  return GenIcon(terminalWindowLine)(props);
};
var TestTubeFillIcon = (props) => {
  return GenIcon(testTubeFill)(props);
};
var TestTubeLineIcon = (props) => {
  return GenIcon(testTubeLine)(props);
};
var ThermometerFillIcon = (props) => {
  return GenIcon(thermometerFill)(props);
};
var ThermometerLineIcon = (props) => {
  return GenIcon(thermometerLine)(props);
};
var ThumbDownFillIcon = (props) => {
  return GenIcon(thumbDownFill)(props);
};
var ThumbDownLineIcon = (props) => {
  return GenIcon(thumbDownLine)(props);
};
var ThumbUpFillIcon = (props) => {
  return GenIcon(thumbUpFill)(props);
};
var ThumbUpLineIcon = (props) => {
  return GenIcon(thumbUpLine)(props);
};
var ThunderstormsFillIcon = (props) => {
  return GenIcon(thunderstormsFill)(props);
};
var ThunderstormsLineIcon = (props) => {
  return GenIcon(thunderstormsLine)(props);
};
var Ticket2FillIcon = (props) => {
  return GenIcon(ticket2Fill)(props);
};
var Ticket2LineIcon = (props) => {
  return GenIcon(ticket2Line)(props);
};
var TicketFillIcon = (props) => {
  return GenIcon(ticketFill)(props);
};
var TicketLineIcon = (props) => {
  return GenIcon(ticketLine)(props);
};
var TimeFillIcon = (props) => {
  return GenIcon(timeFill)(props);
};
var TimeLineIcon = (props) => {
  return GenIcon(timeLine)(props);
};
var Timer2FillIcon = (props) => {
  return GenIcon(timer2Fill)(props);
};
var Timer2LineIcon = (props) => {
  return GenIcon(timer2Line)(props);
};
var TimerFillIcon = (props) => {
  return GenIcon(timerFill)(props);
};
var TimerFlashFillIcon = (props) => {
  return GenIcon(timerFlashFill)(props);
};
var TimerFlashLineIcon = (props) => {
  return GenIcon(timerFlashLine)(props);
};
var TimerLineIcon = (props) => {
  return GenIcon(timerLine)(props);
};
var TodoFillIcon = (props) => {
  return GenIcon(todoFill)(props);
};
var TodoLineIcon = (props) => {
  return GenIcon(todoLine)(props);
};
var ToggleFillIcon = (props) => {
  return GenIcon(toggleFill)(props);
};
var ToggleLineIcon = (props) => {
  return GenIcon(toggleLine)(props);
};
var ToolsFillIcon = (props) => {
  return GenIcon(toolsFill)(props);
};
var ToolsLineIcon = (props) => {
  return GenIcon(toolsLine)(props);
};
var TornadoFillIcon = (props) => {
  return GenIcon(tornadoFill)(props);
};
var TornadoLineIcon = (props) => {
  return GenIcon(tornadoLine)(props);
};
var TrademarkFillIcon = (props) => {
  return GenIcon(trademarkFill)(props);
};
var TrademarkLineIcon = (props) => {
  return GenIcon(trademarkLine)(props);
};
var TrafficLightFillIcon = (props) => {
  return GenIcon(trafficLightFill)(props);
};
var TrafficLightLineIcon = (props) => {
  return GenIcon(trafficLightLine)(props);
};
var TrainFillIcon = (props) => {
  return GenIcon(trainFill)(props);
};
var TrainLineIcon = (props) => {
  return GenIcon(trainLine)(props);
};
var TrainWifiFillIcon = (props) => {
  return GenIcon(trainWifiFill)(props);
};
var TrainWifiLineIcon = (props) => {
  return GenIcon(trainWifiLine)(props);
};
var TravestiFillIcon = (props) => {
  return GenIcon(travestiFill)(props);
};
var TravestiLineIcon = (props) => {
  return GenIcon(travestiLine)(props);
};
var TreasureMapFillIcon = (props) => {
  return GenIcon(treasureMapFill)(props);
};
var TreasureMapLineIcon = (props) => {
  return GenIcon(treasureMapLine)(props);
};
var TrelloFillIcon = (props) => {
  return GenIcon(trelloFill)(props);
};
var TrelloLineIcon = (props) => {
  return GenIcon(trelloLine)(props);
};
var TrophyFillIcon = (props) => {
  return GenIcon(trophyFill)(props);
};
var TrophyLineIcon = (props) => {
  return GenIcon(trophyLine)(props);
};
var TruckFillIcon = (props) => {
  return GenIcon(truckFill)(props);
};
var TruckLineIcon = (props) => {
  return GenIcon(truckLine)(props);
};
var TumblrFillIcon = (props) => {
  return GenIcon(tumblrFill)(props);
};
var TumblrLineIcon = (props) => {
  return GenIcon(tumblrLine)(props);
};
var Tv2FillIcon = (props) => {
  return GenIcon(tv2Fill)(props);
};
var Tv2LineIcon = (props) => {
  return GenIcon(tv2Line)(props);
};
var TvFillIcon = (props) => {
  return GenIcon(tvFill)(props);
};
var TvLineIcon = (props) => {
  return GenIcon(tvLine)(props);
};
var TwitchFillIcon = (props) => {
  return GenIcon(twitchFill)(props);
};
var TwitchLineIcon = (props) => {
  return GenIcon(twitchLine)(props);
};
var TwitterFillIcon = (props) => {
  return GenIcon(twitterFill)(props);
};
var TwitterLineIcon = (props) => {
  return GenIcon(twitterLine)(props);
};
var TyphoonFillIcon = (props) => {
  return GenIcon(typhoonFill)(props);
};
var TyphoonLineIcon = (props) => {
  return GenIcon(typhoonLine)(props);
};
var UDiskFillIcon = (props) => {
  return GenIcon(uDiskFill)(props);
};
var UDiskLineIcon = (props) => {
  return GenIcon(uDiskLine)(props);
};
var UbuntuFillIcon = (props) => {
  return GenIcon(ubuntuFill)(props);
};
var UbuntuLineIcon = (props) => {
  return GenIcon(ubuntuLine)(props);
};
var UmbrellaFillIcon = (props) => {
  return GenIcon(umbrellaFill)(props);
};
var UmbrellaLineIcon = (props) => {
  return GenIcon(umbrellaLine)(props);
};
var UninstallFillIcon = (props) => {
  return GenIcon(uninstallFill)(props);
};
var UninstallLineIcon = (props) => {
  return GenIcon(uninstallLine)(props);
};
var UnsplashFillIcon = (props) => {
  return GenIcon(unsplashFill)(props);
};
var UnsplashLineIcon = (props) => {
  return GenIcon(unsplashLine)(props);
};
var Upload2LineIcon = (props) => {
  return GenIcon(upload2Line)(props);
};
var UploadCloud2FillIcon = (props) => {
  return GenIcon(uploadCloud2Fill)(props);
};
var UploadCloud2LineIcon = (props) => {
  return GenIcon(uploadCloud2Line)(props);
};
var UploadCloudFillIcon = (props) => {
  return GenIcon(uploadCloudFill)(props);
};
var UploadCloudLineIcon = (props) => {
  return GenIcon(uploadCloudLine)(props);
};
var UploadFillIcon = (props) => {
  return GenIcon(uploadFill)(props);
};
var UploadLineIcon = (props) => {
  return GenIcon(uploadLine)(props);
};
var UsbFillIcon = (props) => {
  return GenIcon(usbFill)(props);
};
var UsbLineIcon = (props) => {
  return GenIcon(usbLine)(props);
};
var User2FillIcon = (props) => {
  return GenIcon(user2Fill)(props);
};
var User2LineIcon = (props) => {
  return GenIcon(user2Line)(props);
};
var User3FillIcon = (props) => {
  return GenIcon(user3Fill)(props);
};
var User3LineIcon = (props) => {
  return GenIcon(user3Line)(props);
};
var User4FillIcon = (props) => {
  return GenIcon(user4Fill)(props);
};
var User4LineIcon = (props) => {
  return GenIcon(user4Line)(props);
};
var User5FillIcon = (props) => {
  return GenIcon(user5Fill)(props);
};
var User5LineIcon = (props) => {
  return GenIcon(user5Line)(props);
};
var User6FillIcon = (props) => {
  return GenIcon(user6Fill)(props);
};
var User6LineIcon = (props) => {
  return GenIcon(user6Line)(props);
};
var UserAddFillIcon = (props) => {
  return GenIcon(userAddFill)(props);
};
var UserAddLineIcon = (props) => {
  return GenIcon(userAddLine)(props);
};
var UserFillIcon = (props) => {
  return GenIcon(userFill)(props);
};
var UserFollowFillIcon = (props) => {
  return GenIcon(userFollowFill)(props);
};
var UserFollowLineIcon = (props) => {
  return GenIcon(userFollowLine)(props);
};
var UserHeartFillIcon = (props) => {
  return GenIcon(userHeartFill)(props);
};
var UserHeartLineIcon = (props) => {
  return GenIcon(userHeartLine)(props);
};
var UserLineIcon = (props) => {
  return GenIcon(userLine)(props);
};
var UserLocationFillIcon = (props) => {
  return GenIcon(userLocationFill)(props);
};
var UserLocationLineIcon = (props) => {
  return GenIcon(userLocationLine)(props);
};
var UserReceived2FillIcon = (props) => {
  return GenIcon(userReceived2Fill)(props);
};
var UserReceived2LineIcon = (props) => {
  return GenIcon(userReceived2Line)(props);
};
var UserReceivedFillIcon = (props) => {
  return GenIcon(userReceivedFill)(props);
};
var UserReceivedLineIcon = (props) => {
  return GenIcon(userReceivedLine)(props);
};
var UserSearchFillIcon = (props) => {
  return GenIcon(userSearchFill)(props);
};
var UserSearchLineIcon = (props) => {
  return GenIcon(userSearchLine)(props);
};
var UserSettingsFillIcon = (props) => {
  return GenIcon(userSettingsFill)(props);
};
var UserSettingsLineIcon = (props) => {
  return GenIcon(userSettingsLine)(props);
};
var UserShared2FillIcon = (props) => {
  return GenIcon(userShared2Fill)(props);
};
var UserShared2LineIcon = (props) => {
  return GenIcon(userShared2Line)(props);
};
var UserSharedFillIcon = (props) => {
  return GenIcon(userSharedFill)(props);
};
var UserSharedLineIcon = (props) => {
  return GenIcon(userSharedLine)(props);
};
var UserSmileFillIcon = (props) => {
  return GenIcon(userSmileFill)(props);
};
var UserSmileLineIcon = (props) => {
  return GenIcon(userSmileLine)(props);
};
var UserStarFillIcon = (props) => {
  return GenIcon(userStarFill)(props);
};
var UserStarLineIcon = (props) => {
  return GenIcon(userStarLine)(props);
};
var UserUnfollowFillIcon = (props) => {
  return GenIcon(userUnfollowFill)(props);
};
var UserUnfollowLineIcon = (props) => {
  return GenIcon(userUnfollowLine)(props);
};
var UserVoiceFillIcon = (props) => {
  return GenIcon(userVoiceFill)(props);
};
var UserVoiceLineIcon = (props) => {
  return GenIcon(userVoiceLine)(props);
};
var VideoAddFillIcon = (props) => {
  return GenIcon(videoAddFill)(props);
};
var VideoAddLineIcon = (props) => {
  return GenIcon(videoAddLine)(props);
};
var VideoChatFillIcon = (props) => {
  return GenIcon(videoChatFill)(props);
};
var VideoChatLineIcon = (props) => {
  return GenIcon(videoChatLine)(props);
};
var VideoDownloadFillIcon = (props) => {
  return GenIcon(videoDownloadFill)(props);
};
var VideoDownloadLineIcon = (props) => {
  return GenIcon(videoDownloadLine)(props);
};
var VideoFillIcon = (props) => {
  return GenIcon(videoFill)(props);
};
var VideoUploadFillIcon = (props) => {
  return GenIcon(videoUploadFill)(props);
};
var VideoUploadLineIcon = (props) => {
  return GenIcon(videoUploadLine)(props);
};
var Vidicon2FillIcon = (props) => {
  return GenIcon(vidicon2Fill)(props);
};
var Vidicon2LineIcon = (props) => {
  return GenIcon(vidicon2Line)(props);
};
var VidiconFillIcon = (props) => {
  return GenIcon(vidiconFill)(props);
};
var VidiconLineIcon = (props) => {
  return GenIcon(vidiconLine)(props);
};
var VimeoFillIcon = (props) => {
  return GenIcon(vimeoFill)(props);
};
var VimeoLineIcon = (props) => {
  return GenIcon(vimeoLine)(props);
};
var VipCrown2FillIcon = (props) => {
  return GenIcon(vipCrown2Fill)(props);
};
var VipCrown2LineIcon = (props) => {
  return GenIcon(vipCrown2Line)(props);
};
var VipCrownFillIcon = (props) => {
  return GenIcon(vipCrownFill)(props);
};
var VipCrownLineIcon = (props) => {
  return GenIcon(vipCrownLine)(props);
};
var VipDiamondFillIcon = (props) => {
  return GenIcon(vipDiamondFill)(props);
};
var VipDiamondLineIcon = (props) => {
  return GenIcon(vipDiamondLine)(props);
};
var VipFillIcon = (props) => {
  return GenIcon(vipFill)(props);
};
var VipLineIcon = (props) => {
  return GenIcon(vipLine)(props);
};
var VirusFillIcon = (props) => {
  return GenIcon(virusFill)(props);
};
var VirusLineIcon = (props) => {
  return GenIcon(virusLine)(props);
};
var VisaFillIcon = (props) => {
  return GenIcon(visaFill)(props);
};
var VisaLineIcon = (props) => {
  return GenIcon(visaLine)(props);
};
var VoiceRecognitionFillIcon = (props) => {
  return GenIcon(voiceRecognitionFill)(props);
};
var VoiceRecognitionLineIcon = (props) => {
  return GenIcon(voiceRecognitionLine)(props);
};
var VoiceprintFillIcon = (props) => {
  return GenIcon(voiceprintFill)(props);
};
var VoiceprintLineIcon = (props) => {
  return GenIcon(voiceprintLine)(props);
};
var VolumeDownFillIcon = (props) => {
  return GenIcon(volumeDownFill)(props);
};
var VolumeDownLineIcon = (props) => {
  return GenIcon(volumeDownLine)(props);
};
var VolumeMuteFillIcon = (props) => {
  return GenIcon(volumeMuteFill)(props);
};
var VolumeMuteLineIcon = (props) => {
  return GenIcon(volumeMuteLine)(props);
};
var VolumeOffVibrateFillIcon = (props) => {
  return GenIcon(volumeOffVibrateFill)(props);
};
var VolumeOffVibrateLineIcon = (props) => {
  return GenIcon(volumeOffVibrateLine)(props);
};
var VolumeUpFillIcon = (props) => {
  return GenIcon(volumeUpFill)(props);
};
var VolumeUpLineIcon = (props) => {
  return GenIcon(volumeUpLine)(props);
};
var VolumeVibrateFillIcon = (props) => {
  return GenIcon(volumeVibrateFill)(props);
};
var VolumeVibrateLineIcon = (props) => {
  return GenIcon(volumeVibrateLine)(props);
};
var VuejsFillIcon = (props) => {
  return GenIcon(vuejsFill)(props);
};
var VuejsLineIcon = (props) => {
  return GenIcon(vuejsLine)(props);
};
var WalkFillIcon = (props) => {
  return GenIcon(walkFill)(props);
};
var WalkLineIcon = (props) => {
  return GenIcon(walkLine)(props);
};
var Wallet2FillIcon = (props) => {
  return GenIcon(wallet2Fill)(props);
};
var Wallet2LineIcon = (props) => {
  return GenIcon(wallet2Line)(props);
};
var Wallet3FillIcon = (props) => {
  return GenIcon(wallet3Fill)(props);
};
var Wallet3LineIcon = (props) => {
  return GenIcon(wallet3Line)(props);
};
var WalletFillIcon = (props) => {
  return GenIcon(walletFill)(props);
};
var WalletLineIcon = (props) => {
  return GenIcon(walletLine)(props);
};
var WaterFlashFillIcon = (props) => {
  return GenIcon(waterFlashFill)(props);
};
var WaterFlashLineIcon = (props) => {
  return GenIcon(waterFlashLine)(props);
};
var WebcamFillIcon = (props) => {
  return GenIcon(webcamFill)(props);
};
var WebcamLineIcon = (props) => {
  return GenIcon(webcamLine)(props);
};
var Wechat2FillIcon = (props) => {
  return GenIcon(wechat2Fill)(props);
};
var Wechat2LineIcon = (props) => {
  return GenIcon(wechat2Line)(props);
};
var WechatFillIcon = (props) => {
  return GenIcon(wechatFill)(props);
};
var WechatLineIcon = (props) => {
  return GenIcon(wechatLine)(props);
};
var WechatPayFillIcon = (props) => {
  return GenIcon(wechatPayFill)(props);
};
var WechatPayLineIcon = (props) => {
  return GenIcon(wechatPayLine)(props);
};
var WeiboFillIcon = (props) => {
  return GenIcon(weiboFill)(props);
};
var WeiboLineIcon = (props) => {
  return GenIcon(weiboLine)(props);
};
var WhatsappFillIcon = (props) => {
  return GenIcon(whatsappFill)(props);
};
var WhatsappLineIcon = (props) => {
  return GenIcon(whatsappLine)(props);
};
var WheelchairFillIcon = (props) => {
  return GenIcon(wheelchairFill)(props);
};
var WheelchairLineIcon = (props) => {
  return GenIcon(wheelchairLine)(props);
};
var WifiFillIcon = (props) => {
  return GenIcon(wifiFill)(props);
};
var WifiLineIcon = (props) => {
  return GenIcon(wifiLine)(props);
};
var WifiOffFillIcon = (props) => {
  return GenIcon(wifiOffFill)(props);
};
var WifiOffLineIcon = (props) => {
  return GenIcon(wifiOffLine)(props);
};
var Window2FillIcon = (props) => {
  return GenIcon(window2Fill)(props);
};
var Window2LineIcon = (props) => {
  return GenIcon(window2Line)(props);
};
var WindowFillIcon = (props) => {
  return GenIcon(windowFill)(props);
};
var WindowLineIcon = (props) => {
  return GenIcon(windowLine)(props);
};
var WindowsFillIcon = (props) => {
  return GenIcon(windowsFill)(props);
};
var WindowsLineIcon = (props) => {
  return GenIcon(windowsLine)(props);
};
var WindyFillIcon = (props) => {
  return GenIcon(windyFill)(props);
};
var WindyLineIcon = (props) => {
  return GenIcon(windyLine)(props);
};
var WirelessChargingFillIcon = (props) => {
  return GenIcon(wirelessChargingFill)(props);
};
var WirelessChargingLineIcon = (props) => {
  return GenIcon(wirelessChargingLine)(props);
};
var WomenFillIcon = (props) => {
  return GenIcon(womenFill)(props);
};
var WomenLineIcon = (props) => {
  return GenIcon(womenLine)(props);
};
var XboxFillIcon = (props) => {
  return GenIcon(xboxFill)(props);
};
var XboxLineIcon = (props) => {
  return GenIcon(xboxLine)(props);
};
var XingFillIcon = (props) => {
  return GenIcon(xingFill)(props);
};
var XingLineIcon = (props) => {
  return GenIcon(xingLine)(props);
};
var YoutubeFillIcon = (props) => {
  return GenIcon(youtubeFill)(props);
};
var YoutubeLineIcon = (props) => {
  return GenIcon(youtubeLine)(props);
};
var ZcoolFillIcon = (props) => {
  return GenIcon(zcoolFill)(props);
};
var ZcoolLineIcon = (props) => {
  return GenIcon(zcoolLine)(props);
};
var ZhihuFillIcon = (props) => {
  return GenIcon(zhihuFill)(props);
};
var ZhihuLineIcon = (props) => {
  return GenIcon(zhihuLine)(props);
};
var ZoomInFillIcon = (props) => {
  return GenIcon(zoomInFill)(props);
};
var ZoomInLineIcon = (props) => {
  return GenIcon(zoomInLine)(props);
};
var ZoomOutFillIcon = (props) => {
  return GenIcon(zoomOutFill)(props);
};
var ZoomOutLineIcon = (props) => {
  return GenIcon(zoomOutLine)(props);
};
var ZzzFillIcon = (props) => {
  return GenIcon(zzzFill)(props);
};
var ZzzLineIcon = (props) => {
  return GenIcon(zzzLine)(props);
};
export {
  ABIcon,
  AccountBoxFillIcon,
  AccountBoxLineIcon,
  AccountCircleFillIcon,
  AccountCircleLineIcon,
  AccountPinBoxFillIcon,
  AccountPinBoxLineIcon,
  AccountPinCircleFillIcon,
  AccountPinCircleLineIcon,
  AddBoxFillIcon,
  AddBoxLineIcon,
  AddCircleFillIcon,
  AddCircleLineIcon,
  AddFillIcon,
  AddLineIcon,
  AdminFillIcon,
  AdminLineIcon,
  AdvertisementFillIcon,
  AdvertisementLineIcon,
  AirplayFillIcon,
  AirplayLineIcon,
  AlarmFillIcon,
  AlarmLineIcon,
  AlarmWarningFillIcon,
  AlarmWarningLineIcon,
  AlbumFillIcon,
  AlbumLineIcon,
  AlertFillIcon,
  AlertLineIcon,
  AliensFillIcon,
  AliensLineIcon,
  AlignBottomIcon,
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  AlignTopIcon,
  AlignVerticallyIcon,
  AlipayFillIcon,
  AlipayLineIcon,
  AmazonFillIcon,
  AmazonLineIcon,
  AnchorFillIcon,
  AnchorLineIcon,
  AncientGateFillIcon,
  AncientGateLineIcon,
  AncientPavilionFillIcon,
  AncientPavilionLineIcon,
  AndroidFillIcon,
  AndroidLineIcon,
  AngularjsFillIcon,
  AngularjsLineIcon,
  Anticlockwise2FillIcon,
  Anticlockwise2LineIcon,
  AnticlockwiseFillIcon,
  AnticlockwiseLineIcon,
  AppStoreFillIcon,
  AppStoreLineIcon,
  AppleFillIcon,
  AppleLineIcon,
  Apps2FillIcon,
  Apps2LineIcon,
  AppsFillIcon,
  AppsLineIcon,
  ArchiveDrawerFillIcon,
  ArchiveDrawerLineIcon,
  ArchiveFillIcon,
  ArchiveLineIcon,
  ArrowDownCircleFillIcon,
  ArrowDownCircleLineIcon,
  ArrowDownFillIcon,
  ArrowDownLineIcon,
  ArrowDownSFillIcon,
  ArrowDownSLineIcon,
  ArrowDropDownFillIcon,
  ArrowDropDownLineIcon,
  ArrowDropLeftFillIcon,
  ArrowDropLeftLineIcon,
  ArrowDropRightFillIcon,
  ArrowDropRightLineIcon,
  ArrowDropUpFillIcon,
  ArrowDropUpLineIcon,
  ArrowGoBackFillIcon,
  ArrowGoBackLineIcon,
  ArrowGoForwardFillIcon,
  ArrowGoForwardLineIcon,
  ArrowLeftCircleFillIcon,
  ArrowLeftCircleLineIcon,
  ArrowLeftDownFillIcon,
  ArrowLeftDownLineIcon,
  ArrowLeftFillIcon,
  ArrowLeftLineIcon,
  ArrowLeftRightFillIcon,
  ArrowLeftRightLineIcon,
  ArrowLeftSFillIcon,
  ArrowLeftSLineIcon,
  ArrowLeftUpFillIcon,
  ArrowLeftUpLineIcon,
  ArrowRightCircleFillIcon,
  ArrowRightCircleLineIcon,
  ArrowRightDownFillIcon,
  ArrowRightDownLineIcon,
  ArrowRightFillIcon,
  ArrowRightLineIcon,
  ArrowRightSFillIcon,
  ArrowRightSLineIcon,
  ArrowRightUpFillIcon,
  ArrowRightUpLineIcon,
  ArrowUpCircleFillIcon,
  ArrowUpCircleLineIcon,
  ArrowUpDownFillIcon,
  ArrowUpDownLineIcon,
  ArrowUpFillIcon,
  ArrowUpLineIcon,
  ArrowUpSFillIcon,
  ArrowUpSLineIcon,
  Artboard2FillIcon,
  Artboard2LineIcon,
  ArtboardFillIcon,
  ArtboardLineIcon,
  ArticleFillIcon,
  ArticleLineIcon,
  AspectRatioFillIcon,
  AspectRatioLineIcon,
  AsteriskIcon,
  AtFillIcon,
  AtLineIcon,
  Attachment2Icon,
  AttachmentFillIcon,
  AttachmentLineIcon,
  AuctionFillIcon,
  AuctionLineIcon,
  AwardFillIcon,
  AwardLineIcon,
  BaiduFillIcon,
  BaiduLineIcon,
  BallPenFillIcon,
  BallPenLineIcon,
  BankCard2FillIcon,
  BankCard2LineIcon,
  BankCardFillIcon,
  BankCardLineIcon,
  BankFillIcon,
  BankLineIcon,
  BarChart2FillIcon,
  BarChart2LineIcon,
  BarChartBoxFillIcon,
  BarChartBoxLineIcon,
  BarChartFillIcon,
  BarChartGroupedFillIcon,
  BarChartGroupedLineIcon,
  BarChartHorizontalFillIcon,
  BarChartHorizontalLineIcon,
  BarChartLineIcon,
  BarcodeBoxFillIcon,
  BarcodeBoxLineIcon,
  BarcodeFillIcon,
  BarcodeLineIcon,
  BarricadeFillIcon,
  BarricadeLineIcon,
  BaseStationFillIcon,
  BaseStationLineIcon,
  BasketballFillIcon,
  BasketballLineIcon,
  Battery2ChargeFillIcon,
  Battery2ChargeLineIcon,
  Battery2FillIcon,
  Battery2LineIcon,
  BatteryChargeFillIcon,
  BatteryChargeLineIcon,
  BatteryFillIcon,
  BatteryLineIcon,
  BatteryLowFillIcon,
  BatteryLowLineIcon,
  BatterySaverFillIcon,
  BatterySaverLineIcon,
  BatteryShareFillIcon,
  BatteryShareLineIcon,
  BearSmileFillIcon,
  BearSmileLineIcon,
  BehanceFillIcon,
  BehanceLineIcon,
  BellFillIcon,
  BellLineIcon,
  BikeFillIcon,
  BikeLineIcon,
  BilibiliFillIcon,
  BilibiliLineIcon,
  BillFillIcon,
  BillLineIcon,
  BilliardsFillIcon,
  BilliardsLineIcon,
  BitCoinFillIcon,
  BitCoinLineIcon,
  BlazeFillIcon,
  BlazeLineIcon,
  BluetoothConnectFillIcon,
  BluetoothConnectLineIcon,
  BluetoothFillIcon,
  BluetoothLineIcon,
  BlurOffFillIcon,
  BlurOffLineIcon,
  BodyScanFillIcon,
  BodyScanLineIcon,
  BoldIcon,
  Book2FillIcon,
  Book2LineIcon,
  Book3FillIcon,
  Book3LineIcon,
  BookFillIcon,
  BookLineIcon,
  BookMarkFillIcon,
  BookMarkLineIcon,
  BookOpenFillIcon,
  BookOpenLineIcon,
  BookReadFillIcon,
  BookReadLineIcon,
  BookletFillIcon,
  BookletLineIcon,
  Bookmark2FillIcon,
  Bookmark2LineIcon,
  Bookmark3FillIcon,
  Bookmark3LineIcon,
  BookmarkFillIcon,
  BookmarkLineIcon,
  BoxingFillIcon,
  BoxingLineIcon,
  BracesFillIcon,
  BracesLineIcon,
  BracketsFillIcon,
  BracketsLineIcon,
  Briefcase2FillIcon,
  Briefcase2LineIcon,
  Briefcase3FillIcon,
  Briefcase3LineIcon,
  Briefcase4FillIcon,
  Briefcase4LineIcon,
  Briefcase5FillIcon,
  Briefcase5LineIcon,
  BriefcaseFillIcon,
  BriefcaseLineIcon,
  BringForwardIcon,
  BringToFrontIcon,
  BroadcastFillIcon,
  BroadcastLineIcon,
  Brush2FillIcon,
  Brush2LineIcon,
  Brush3FillIcon,
  Brush3LineIcon,
  Brush4FillIcon,
  Brush4LineIcon,
  BrushFillIcon,
  BrushLineIcon,
  BubbleChartFillIcon,
  BubbleChartLineIcon,
  Bug2FillIcon,
  Bug2LineIcon,
  BugFillIcon,
  BugLineIcon,
  Building2FillIcon,
  Building2LineIcon,
  Building3FillIcon,
  Building3LineIcon,
  Building4FillIcon,
  Building4LineIcon,
  BuildingFillIcon,
  BuildingLineIcon,
  Bus2FillIcon,
  Bus2LineIcon,
  BusFillIcon,
  BusLineIcon,
  BusWifiFillIcon,
  BusWifiLineIcon,
  CactusFillIcon,
  CactusLineIcon,
  Cake2FillIcon,
  Cake2LineIcon,
  Cake3FillIcon,
  Cake3LineIcon,
  CakeFillIcon,
  CakeLineIcon,
  CalculatorFillIcon,
  CalculatorLineIcon,
  Calendar2FillIcon,
  Calendar2LineIcon,
  CalendarCheckFillIcon,
  CalendarCheckLineIcon,
  CalendarEventFillIcon,
  CalendarEventLineIcon,
  CalendarFillIcon,
  CalendarLineIcon,
  CalendarTodoFillIcon,
  CalendarTodoLineIcon,
  Camera2FillIcon,
  Camera2LineIcon,
  Camera3FillIcon,
  Camera3LineIcon,
  CameraFillIcon,
  CameraLensFillIcon,
  CameraLensLineIcon,
  CameraLineIcon,
  CameraOffFillIcon,
  CameraOffLineIcon,
  CameraSwitchFillIcon,
  CameraSwitchLineIcon,
  CapsuleFillIcon,
  CapsuleLineIcon,
  CarFillIcon,
  CarLineIcon,
  CarWashingFillIcon,
  CarWashingLineIcon,
  CaravanFillIcon,
  CaravanLineIcon,
  CastFillIcon,
  CastLineIcon,
  CellphoneFillIcon,
  CellphoneLineIcon,
  CelsiusFillIcon,
  CelsiusLineIcon,
  CentosFillIcon,
  CentosLineIcon,
  CharacterRecognitionFillIcon,
  CharacterRecognitionLineIcon,
  ChargingPile2FillIcon,
  ChargingPile2LineIcon,
  ChargingPileFillIcon,
  ChargingPileLineIcon,
  Chat1FillIcon,
  Chat1LineIcon,
  Chat2FillIcon,
  Chat2LineIcon,
  Chat3FillIcon,
  Chat3LineIcon,
  Chat4FillIcon,
  Chat4LineIcon,
  ChatCheckFillIcon,
  ChatCheckLineIcon,
  ChatDeleteFillIcon,
  ChatDeleteLineIcon,
  ChatDownloadFillIcon,
  ChatDownloadLineIcon,
  ChatFollowUpFillIcon,
  ChatFollowUpLineIcon,
  ChatForwardFillIcon,
  ChatForwardLineIcon,
  ChatHeartFillIcon,
  ChatHeartLineIcon,
  ChatHistoryFillIcon,
  ChatHistoryLineIcon,
  ChatNewFillIcon,
  ChatNewLineIcon,
  ChatOffFillIcon,
  ChatOffLineIcon,
  ChatPollFillIcon,
  ChatPollLineIcon,
  ChatPrivateFillIcon,
  ChatPrivateLineIcon,
  ChatQuoteFillIcon,
  ChatQuoteLineIcon,
  ChatSettingsFillIcon,
  ChatSettingsLineIcon,
  ChatSmile2FillIcon,
  ChatSmile2LineIcon,
  ChatSmile3FillIcon,
  ChatSmile3LineIcon,
  ChatSmileFillIcon,
  ChatSmileLineIcon,
  ChatUploadFillIcon,
  ChatUploadLineIcon,
  ChatVoiceFillIcon,
  ChatVoiceLineIcon,
  CheckDoubleFillIcon,
  CheckDoubleLineIcon,
  CheckFillIcon,
  CheckLineIcon,
  CheckboxBlankCircleFillIcon,
  CheckboxBlankCircleLineIcon,
  CheckboxBlankFillIcon,
  CheckboxBlankLineIcon,
  CheckboxCircleFillIcon,
  CheckboxCircleLineIcon,
  CheckboxFillIcon,
  CheckboxIndeterminateFillIcon,
  CheckboxIndeterminateLineIcon,
  CheckboxLineIcon,
  CheckboxMultipleBlankFillIcon,
  CheckboxMultipleBlankLineIcon,
  CheckboxMultipleFillIcon,
  CheckboxMultipleLineIcon,
  ChinaRailwayFillIcon,
  ChinaRailwayLineIcon,
  ChromeFillIcon,
  ChromeLineIcon,
  ClapperboardFillIcon,
  ClapperboardLineIcon,
  ClipboardFillIcon,
  ClipboardLineIcon,
  Clockwise2FillIcon,
  Clockwise2LineIcon,
  ClockwiseFillIcon,
  ClockwiseLineIcon,
  CloseCircleFillIcon,
  CloseCircleLineIcon,
  CloseFillIcon,
  CloseLineIcon,
  ClosedCaptioningFillIcon,
  ClosedCaptioningLineIcon,
  CloudFillIcon,
  CloudLineIcon,
  CloudOffFillIcon,
  CloudOffLineIcon,
  CloudWindyFillIcon,
  CloudWindyLineIcon,
  Cloudy2FillIcon,
  Cloudy2LineIcon,
  CloudyFillIcon,
  CloudyLineIcon,
  CodeBoxFillIcon,
  CodeBoxLineIcon,
  CodeFillIcon,
  CodeLineIcon,
  CodeSFillIcon,
  CodeSLineIcon,
  CodeSSlashFillIcon,
  CodeSSlashLineIcon,
  CodeViewIcon,
  CodepenFillIcon,
  CodepenLineIcon,
  CoinFillIcon,
  CoinLineIcon,
  CoinsFillIcon,
  CoinsLineIcon,
  CollageFillIcon,
  CollageLineIcon,
  CommandFillIcon,
  CommandLineIcon,
  CommunityFillIcon,
  CommunityLineIcon,
  Compass2FillIcon,
  Compass2LineIcon,
  Compass3FillIcon,
  Compass3LineIcon,
  Compass4FillIcon,
  Compass4LineIcon,
  CompassDiscoverFillIcon,
  CompassDiscoverLineIcon,
  CompassFillIcon,
  CompassLineIcon,
  Compasses2FillIcon,
  Compasses2LineIcon,
  CompassesFillIcon,
  CompassesLineIcon,
  ComputerFillIcon,
  ComputerLineIcon,
  ContactsBook2FillIcon,
  ContactsBook2LineIcon,
  ContactsBookFillIcon,
  ContactsBookLineIcon,
  ContactsBookUploadFillIcon,
  ContactsBookUploadLineIcon,
  ContactsFillIcon,
  ContactsLineIcon,
  Contrast2FillIcon,
  Contrast2LineIcon,
  ContrastDrop2FillIcon,
  ContrastDrop2LineIcon,
  ContrastDropFillIcon,
  ContrastDropLineIcon,
  ContrastFillIcon,
  ContrastLineIcon,
  CopperCoinFillIcon,
  CopperCoinLineIcon,
  CopperDiamondFillIcon,
  CopperDiamondLineIcon,
  CopyleftFillIcon,
  CopyleftLineIcon,
  CopyrightFillIcon,
  CopyrightLineIcon,
  CoreosFillIcon,
  CoreosLineIcon,
  Coupon2FillIcon,
  Coupon2LineIcon,
  Coupon3FillIcon,
  Coupon3LineIcon,
  Coupon4FillIcon,
  Coupon4LineIcon,
  Coupon5FillIcon,
  Coupon5LineIcon,
  CouponFillIcon,
  CouponLineIcon,
  CpuFillIcon,
  CpuLineIcon,
  CreativeCommonsByFillIcon,
  CreativeCommonsByLineIcon,
  CreativeCommonsFillIcon,
  CreativeCommonsLineIcon,
  CreativeCommonsNcFillIcon,
  CreativeCommonsNcLineIcon,
  CreativeCommonsNdFillIcon,
  CreativeCommonsNdLineIcon,
  CreativeCommonsSaFillIcon,
  CreativeCommonsSaLineIcon,
  CreativeCommonsZeroFillIcon,
  CreativeCommonsZeroLineIcon,
  CriminalFillIcon,
  CriminalLineIcon,
  Crop2FillIcon,
  Crop2LineIcon,
  CropFillIcon,
  CropLineIcon,
  Css3FillIcon,
  Css3LineIcon,
  CupFillIcon,
  CupLineIcon,
  CurrencyFillIcon,
  CurrencyLineIcon,
  CursorFillIcon,
  CursorLineIcon,
  CustomerService2FillIcon,
  CustomerService2LineIcon,
  CustomerServiceFillIcon,
  CustomerServiceLineIcon,
  Dashboard2FillIcon,
  Dashboard2LineIcon,
  Dashboard3FillIcon,
  Dashboard3LineIcon,
  DashboardFillIcon,
  DashboardLineIcon,
  Database2FillIcon,
  Database2LineIcon,
  DatabaseFillIcon,
  DatabaseLineIcon,
  DeleteBack2FillIcon,
  DeleteBack2LineIcon,
  DeleteBackFillIcon,
  DeleteBackLineIcon,
  DeleteBin2FillIcon,
  DeleteBin2LineIcon,
  DeleteBin3FillIcon,
  DeleteBin3LineIcon,
  DeleteBin4FillIcon,
  DeleteBin4LineIcon,
  DeleteBin5FillIcon,
  DeleteBin5LineIcon,
  DeleteBin6FillIcon,
  DeleteBin6LineIcon,
  DeleteBin7FillIcon,
  DeleteBin7LineIcon,
  DeleteBinFillIcon,
  DeleteBinLineIcon,
  DeleteColumnIcon,
  DeleteRowIcon,
  DeviceFillIcon,
  DeviceLineIcon,
  DeviceRecoverFillIcon,
  DeviceRecoverLineIcon,
  DingdingFillIcon,
  DingdingLineIcon,
  DirectionFillIcon,
  DirectionLineIcon,
  DiscFillIcon,
  DiscLineIcon,
  DiscordFillIcon,
  DiscordLineIcon,
  DiscussFillIcon,
  DiscussLineIcon,
  DislikeFillIcon,
  DislikeLineIcon,
  DisqusFillIcon,
  DisqusLineIcon,
  DivideFillIcon,
  DivideLineIcon,
  DonutChartFillIcon,
  DonutChartLineIcon,
  DoorClosedFillIcon,
  DoorClosedLineIcon,
  DoorFillIcon,
  DoorLineIcon,
  DoorLockBoxFillIcon,
  DoorLockBoxLineIcon,
  DoorLockFillIcon,
  DoorLockLineIcon,
  DoorOpenFillIcon,
  DoorOpenLineIcon,
  DossierFillIcon,
  DossierLineIcon,
  DoubanFillIcon,
  DoubanLineIcon,
  DoubleQuotesLIcon,
  DoubleQuotesRIcon,
  Download2FillIcon,
  Download2LineIcon,
  DownloadCloud2FillIcon,
  DownloadCloud2LineIcon,
  DownloadCloudFillIcon,
  DownloadCloudLineIcon,
  DownloadFillIcon,
  DownloadLineIcon,
  DraftFillIcon,
  DraftLineIcon,
  DragDropFillIcon,
  DragDropLineIcon,
  DragMove2FillIcon,
  DragMove2LineIcon,
  DragMoveFillIcon,
  DragMoveLineIcon,
  DribbbleFillIcon,
  DribbbleLineIcon,
  DriveFillIcon,
  DriveLineIcon,
  DrizzleFillIcon,
  DrizzleLineIcon,
  DropFillIcon,
  DropLineIcon,
  DropboxFillIcon,
  DropboxLineIcon,
  DualSim1FillIcon,
  DualSim1LineIcon,
  DualSim2FillIcon,
  DualSim2LineIcon,
  DvFillIcon,
  DvLineIcon,
  DvdFillIcon,
  DvdLineIcon,
  EBike2FillIcon,
  EBike2LineIcon,
  EBikeFillIcon,
  EBikeLineIcon,
  EarthFillIcon,
  EarthLineIcon,
  EarthquakeFillIcon,
  EarthquakeLineIcon,
  EdgeFillIcon,
  EdgeLineIcon,
  Edit2FillIcon,
  Edit2LineIcon,
  EditBoxFillIcon,
  EditBoxLineIcon,
  EditCircleFillIcon,
  EditCircleLineIcon,
  EditFillIcon,
  EditLineIcon,
  EjectFillIcon,
  EjectLineIcon,
  Emotion2FillIcon,
  Emotion2LineIcon,
  EmotionFillIcon,
  EmotionHappyFillIcon,
  EmotionHappyLineIcon,
  EmotionLaughFillIcon,
  EmotionLaughLineIcon,
  EmotionLineIcon,
  EmotionNormalFillIcon,
  EmotionNormalLineIcon,
  EmotionSadFillIcon,
  EmotionSadLineIcon,
  EmotionUnhappyFillIcon,
  EmotionUnhappyLineIcon,
  EmpathizeFillIcon,
  EmpathizeLineIcon,
  EmphasisCnIcon,
  EmphasisIcon,
  EnglishInputIcon,
  EqualizerFillIcon,
  EqualizerLineIcon,
  EraserFillIcon,
  EraserLineIcon,
  ErrorWarningFillIcon,
  ErrorWarningLineIcon,
  EvernoteFillIcon,
  EvernoteLineIcon,
  ExchangeBoxFillIcon,
  ExchangeBoxLineIcon,
  ExchangeCnyFillIcon,
  ExchangeCnyLineIcon,
  ExchangeDollarFillIcon,
  ExchangeDollarLineIcon,
  ExchangeFillIcon,
  ExchangeFundsFillIcon,
  ExchangeFundsLineIcon,
  ExchangeLineIcon,
  ExternalLinkFillIcon,
  ExternalLinkLineIcon,
  Eye2FillIcon,
  Eye2LineIcon,
  EyeCloseFillIcon,
  EyeCloseLineIcon,
  EyeFillIcon,
  EyeLineIcon,
  EyeOffFillIcon,
  EyeOffLineIcon,
  FacebookBoxFillIcon,
  FacebookBoxLineIcon,
  FacebookCircleFillIcon,
  FacebookCircleLineIcon,
  FacebookFillIcon,
  FacebookLineIcon,
  FahrenheitFillIcon,
  FahrenheitLineIcon,
  FeedbackFillIcon,
  FeedbackLineIcon,
  File2FillIcon,
  File2LineIcon,
  File3FillIcon,
  File3LineIcon,
  File4FillIcon,
  File4LineIcon,
  FileAddFillIcon,
  FileAddLineIcon,
  FileChart2FillIcon,
  FileChart2LineIcon,
  FileChartFillIcon,
  FileChartLineIcon,
  FileCloudFillIcon,
  FileCloudLineIcon,
  FileCodeFillIcon,
  FileCodeLineIcon,
  FileCopy2FillIcon,
  FileCopy2LineIcon,
  FileCopyFillIcon,
  FileCopyLineIcon,
  FileDamageFillIcon,
  FileDamageLineIcon,
  FileDownloadFillIcon,
  FileDownloadLineIcon,
  FileEditFillIcon,
  FileEditLineIcon,
  FileExcel2FillIcon,
  FileExcel2LineIcon,
  FileExcelFillIcon,
  FileExcelLineIcon,
  FileFillIcon,
  FileForbidFillIcon,
  FileForbidLineIcon,
  FileGifFillIcon,
  FileGifLineIcon,
  FileHistoryFillIcon,
  FileHistoryLineIcon,
  FileHwpFillIcon,
  FileHwpLineIcon,
  FileInfoFillIcon,
  FileInfoLineIcon,
  FileLineIcon,
  FileList2FillIcon,
  FileList2LineIcon,
  FileList3FillIcon,
  FileList3LineIcon,
  FileListFillIcon,
  FileListLineIcon,
  FileLockFillIcon,
  FileLockLineIcon,
  FileMarkFillIcon,
  FileMarkLineIcon,
  FileMusicFillIcon,
  FileMusicLineIcon,
  FilePaper2FillIcon,
  FilePaper2LineIcon,
  FilePaperFillIcon,
  FilePaperLineIcon,
  FilePdfFillIcon,
  FilePdfLineIcon,
  FilePpt2FillIcon,
  FilePpt2LineIcon,
  FilePptFillIcon,
  FilePptLineIcon,
  FileReduceFillIcon,
  FileReduceLineIcon,
  FileSearchFillIcon,
  FileSearchLineIcon,
  FileSettingsFillIcon,
  FileSettingsLineIcon,
  FileShield2FillIcon,
  FileShield2LineIcon,
  FileShieldFillIcon,
  FileShieldLineIcon,
  FileShredFillIcon,
  FileShredLineIcon,
  FileTextFillIcon,
  FileTextLineIcon,
  FileTransferFillIcon,
  FileTransferLineIcon,
  FileUnknowFillIcon,
  FileUnknowLineIcon,
  FileUploadFillIcon,
  FileUploadLineIcon,
  FileUserFillIcon,
  FileUserLineIcon,
  FileWarningFillIcon,
  FileWarningLineIcon,
  FileWord2FillIcon,
  FileWord2LineIcon,
  FileWordFillIcon,
  FileWordLineIcon,
  FileZipFillIcon,
  FileZipLineIcon,
  FilmFillIcon,
  FilmLineIcon,
  Filter2FillIcon,
  Filter2LineIcon,
  Filter3FillIcon,
  Filter3LineIcon,
  FilterFillIcon,
  FilterLineIcon,
  FilterOffFillIcon,
  FilterOffLineIcon,
  FindReplaceFillIcon,
  FindReplaceLineIcon,
  FinderFillIcon,
  FinderLineIcon,
  Fingerprint2FillIcon,
  Fingerprint2LineIcon,
  FingerprintFillIcon,
  FingerprintLineIcon,
  FireFillIcon,
  FireLineIcon,
  FirefoxFillIcon,
  FirefoxLineIcon,
  FirstAidKitFillIcon,
  FirstAidKitLineIcon,
  Flag2FillIcon,
  Flag2LineIcon,
  FlagFillIcon,
  FlagLineIcon,
  FlashlightFillIcon,
  FlashlightLineIcon,
  FlaskFillIcon,
  FlaskLineIcon,
  FlightLandFillIcon,
  FlightLandLineIcon,
  FlightTakeoffFillIcon,
  FlightTakeoffLineIcon,
  FloodFillIcon,
  FloodLineIcon,
  FlowChartIcon,
  FlutterFillIcon,
  FlutterLineIcon,
  Focus2FillIcon,
  Focus2LineIcon,
  Focus3FillIcon,
  Focus3LineIcon,
  FocusFillIcon,
  FocusLineIcon,
  FoggyFillIcon,
  FoggyLineIcon,
  Folder2FillIcon,
  Folder2LineIcon,
  Folder3FillIcon,
  Folder3LineIcon,
  Folder4FillIcon,
  Folder4LineIcon,
  Folder5FillIcon,
  Folder5LineIcon,
  FolderAddFillIcon,
  FolderAddLineIcon,
  FolderChart2FillIcon,
  FolderChart2LineIcon,
  FolderChartFillIcon,
  FolderChartLineIcon,
  FolderDownloadFillIcon,
  FolderDownloadLineIcon,
  FolderFillIcon,
  FolderForbidFillIcon,
  FolderForbidLineIcon,
  FolderHistoryFillIcon,
  FolderHistoryLineIcon,
  FolderInfoFillIcon,
  FolderInfoLineIcon,
  FolderKeyholeFillIcon,
  FolderKeyholeLineIcon,
  FolderLineIcon,
  FolderLockFillIcon,
  FolderLockLineIcon,
  FolderMusicFillIcon,
  FolderMusicLineIcon,
  FolderOpenFillIcon,
  FolderOpenLineIcon,
  FolderReceivedFillIcon,
  FolderReceivedLineIcon,
  FolderReduceFillIcon,
  FolderReduceLineIcon,
  FolderSettingsFillIcon,
  FolderSettingsLineIcon,
  FolderSharedFillIcon,
  FolderSharedLineIcon,
  FolderShield2FillIcon,
  FolderShield2LineIcon,
  FolderShieldFillIcon,
  FolderShieldLineIcon,
  FolderTransferFillIcon,
  FolderTransferLineIcon,
  FolderUnknowFillIcon,
  FolderUnknowLineIcon,
  FolderUploadFillIcon,
  FolderUploadLineIcon,
  FolderUserFillIcon,
  FolderUserLineIcon,
  FolderWarningFillIcon,
  FolderWarningLineIcon,
  FolderZipFillIcon,
  FolderZipLineIcon,
  FoldersFillIcon,
  FoldersLineIcon,
  FontColorIcon,
  FontSize2Icon,
  FontSizeIcon,
  FootballFillIcon,
  FootballLineIcon,
  FootprintFillIcon,
  FootprintLineIcon,
  Forbid2FillIcon,
  Forbid2LineIcon,
  ForbidFillIcon,
  ForbidLineIcon,
  FormatClearIcon,
  FourKFillIcon,
  FourKLineIcon,
  FridgeFillIcon,
  FridgeLineIcon,
  FullscreenExitFillIcon,
  FullscreenExitLineIcon,
  FullscreenFillIcon,
  FullscreenLineIcon,
  FunctionFillIcon,
  FunctionLineIcon,
  FunctionsIcon,
  FundsBoxFillIcon,
  FundsBoxLineIcon,
  FundsFillIcon,
  FundsLineIcon,
  GalleryFillIcon,
  GalleryLineIcon,
  GalleryUploadFillIcon,
  GalleryUploadLineIcon,
  GameFillIcon,
  GameLineIcon,
  GamepadFillIcon,
  GamepadLineIcon,
  GasStationFillIcon,
  GasStationLineIcon,
  GatsbyFillIcon,
  GatsbyLineIcon,
  GenderlessFillIcon,
  GenderlessLineIcon,
  Ghost2FillIcon,
  Ghost2LineIcon,
  GhostFillIcon,
  GhostLineIcon,
  GhostSmileFillIcon,
  GhostSmileLineIcon,
  Gift2FillIcon,
  Gift2LineIcon,
  GiftFillIcon,
  GiftLineIcon,
  GitBranchFillIcon,
  GitBranchLineIcon,
  GitCommitFillIcon,
  GitCommitLineIcon,
  GitMergeFillIcon,
  GitMergeLineIcon,
  GitPullRequestFillIcon,
  GitPullRequestLineIcon,
  GitRepositoryCommitsFillIcon,
  GitRepositoryCommitsLineIcon,
  GitRepositoryFillIcon,
  GitRepositoryLineIcon,
  GitRepositoryPrivateFillIcon,
  GitRepositoryPrivateLineIcon,
  GithubFillIcon,
  GithubLineIcon,
  GitlabFillIcon,
  GitlabLineIcon,
  GlobalFillIcon,
  GlobalLineIcon,
  GlobeFillIcon,
  GlobeLineIcon,
  GobletFillIcon,
  GobletLineIcon,
  GoogleFillIcon,
  GoogleLineIcon,
  GooglePlayFillIcon,
  GooglePlayLineIcon,
  GovernmentFillIcon,
  GovernmentLineIcon,
  GpsFillIcon,
  GpsLineIcon,
  GradienterFillIcon,
  GradienterLineIcon,
  GridFillIcon,
  GridLineIcon,
  Group2FillIcon,
  Group2LineIcon,
  GroupFillIcon,
  GroupLineIcon,
  GuideFillIcon,
  GuideLineIcon,
  H1Icon,
  H2Icon,
  H3Icon,
  H4Icon,
  H5Icon,
  H6Icon,
  HailFillIcon,
  HailLineIcon,
  HammerFillIcon,
  HammerLineIcon,
  HandCoinFillIcon,
  HandCoinLineIcon,
  HandHeartFillIcon,
  HandHeartLineIcon,
  HandSanitizerFillIcon,
  HandSanitizerLineIcon,
  HandbagFillIcon,
  HandbagLineIcon,
  HardDrive2FillIcon,
  HardDrive2LineIcon,
  HardDriveFillIcon,
  HardDriveLineIcon,
  HashtagIcon,
  Haze2FillIcon,
  Haze2LineIcon,
  HazeFillIcon,
  HazeLineIcon,
  HdFillIcon,
  HdLineIcon,
  HeadingIcon,
  HeadphoneFillIcon,
  HeadphoneLineIcon,
  HealthBookFillIcon,
  HealthBookLineIcon,
  Heart2FillIcon,
  Heart2LineIcon,
  Heart3FillIcon,
  Heart3LineIcon,
  HeartAddFillIcon,
  HeartAddLineIcon,
  HeartFillIcon,
  HeartLineIcon,
  HeartPulseFillIcon,
  HeartPulseLineIcon,
  HeartsFillIcon,
  HeartsLineIcon,
  HeavyShowersFillIcon,
  HeavyShowersLineIcon,
  HistoryFillIcon,
  HistoryLineIcon,
  Home2FillIcon,
  Home2LineIcon,
  Home3FillIcon,
  Home3LineIcon,
  Home4FillIcon,
  Home4LineIcon,
  Home5FillIcon,
  Home5LineIcon,
  Home6FillIcon,
  Home6LineIcon,
  Home7FillIcon,
  Home7LineIcon,
  Home8FillIcon,
  Home8LineIcon,
  HomeFillIcon,
  HomeGearFillIcon,
  HomeGearLineIcon,
  HomeHeartFillIcon,
  HomeHeartLineIcon,
  HomeLineIcon,
  HomeSmile2FillIcon,
  HomeSmile2LineIcon,
  HomeSmileFillIcon,
  HomeSmileLineIcon,
  HomeWifiFillIcon,
  HomeWifiLineIcon,
  HonorOfKingsFillIcon,
  HonorOfKingsLineIcon,
  HonourFillIcon,
  HonourLineIcon,
  HospitalFillIcon,
  HospitalLineIcon,
  HotelBedFillIcon,
  HotelBedLineIcon,
  HotelFillIcon,
  HotelLineIcon,
  HotspotFillIcon,
  HotspotLineIcon,
  HqFillIcon,
  HqLineIcon,
  Html5FillIcon,
  Html5LineIcon,
  IeFillIcon,
  IeLineIcon,
  Image2FillIcon,
  Image2LineIcon,
  ImageAddFillIcon,
  ImageAddLineIcon,
  ImageEditFillIcon,
  ImageEditLineIcon,
  ImageFillIcon,
  ImageLineIcon,
  InboxArchiveFillIcon,
  InboxArchiveLineIcon,
  InboxFillIcon,
  InboxLineIcon,
  InboxUnarchiveFillIcon,
  InboxUnarchiveLineIcon,
  IncreaseDecreaseFillIcon,
  IncreaseDecreaseLineIcon,
  IndentDecreaseIcon,
  IndentIncreaseIcon,
  IndeterminateCircleFillIcon,
  IndeterminateCircleLineIcon,
  InformationFillIcon,
  InformationLineIcon,
  InfraredThermometerFillIcon,
  InfraredThermometerLineIcon,
  InkBottleFillIcon,
  InkBottleLineIcon,
  InputCursorMoveIcon,
  InputMethodFillIcon,
  InputMethodLineIcon,
  InsertColumnLeftIcon,
  InsertColumnRightIcon,
  InsertRowBottomIcon,
  InsertRowTopIcon,
  InstagramFillIcon,
  InstagramLineIcon,
  InstallFillIcon,
  InstallLineIcon,
  InvisionFillIcon,
  InvisionLineIcon,
  ItalicIcon,
  KakaoTalkFillIcon,
  KakaoTalkLineIcon,
  Key2FillIcon,
  Key2LineIcon,
  KeyFillIcon,
  KeyLineIcon,
  KeyboardBoxFillIcon,
  KeyboardBoxLineIcon,
  KeyboardFillIcon,
  KeyboardLineIcon,
  KeynoteFillIcon,
  KeynoteLineIcon,
  KnifeBloodFillIcon,
  KnifeBloodLineIcon,
  KnifeFillIcon,
  KnifeLineIcon,
  LandscapeFillIcon,
  LandscapeLineIcon,
  Layout2FillIcon,
  Layout2LineIcon,
  Layout3FillIcon,
  Layout3LineIcon,
  Layout4FillIcon,
  Layout4LineIcon,
  Layout5FillIcon,
  Layout5LineIcon,
  Layout6FillIcon,
  Layout6LineIcon,
  LayoutBottom2FillIcon,
  LayoutBottom2LineIcon,
  LayoutBottomFillIcon,
  LayoutBottomLineIcon,
  LayoutColumnFillIcon,
  LayoutColumnLineIcon,
  LayoutFillIcon,
  LayoutGridFillIcon,
  LayoutGridLineIcon,
  LayoutLeft2FillIcon,
  LayoutLeft2LineIcon,
  LayoutLeftFillIcon,
  LayoutLeftLineIcon,
  LayoutLineIcon,
  LayoutMasonryFillIcon,
  LayoutMasonryLineIcon,
  LayoutRight2FillIcon,
  LayoutRight2LineIcon,
  LayoutRightFillIcon,
  LayoutRightLineIcon,
  LayoutRowFillIcon,
  LayoutRowLineIcon,
  LayoutTop2FillIcon,
  LayoutTop2LineIcon,
  LayoutTopFillIcon,
  LayoutTopLineIcon,
  LeafFillIcon,
  LeafLineIcon,
  LifebuoyFillIcon,
  LifebuoyLineIcon,
  LightbulbFillIcon,
  LightbulbFlashFillIcon,
  LightbulbFlashLineIcon,
  LightbulbLineIcon,
  LineChartFillIcon,
  LineChartLineIcon,
  LineFillIcon,
  LineHeightIcon,
  LineLineIcon,
  LinkIcon,
  LinkMIcon,
  LinkUnlinkIcon,
  LinkUnlinkMIcon,
  LinkedinBoxFillIcon,
  LinkedinBoxLineIcon,
  LinkedinFillIcon,
  LinkedinLineIcon,
  LinksFillIcon,
  LinksLineIcon,
  ListCheck2Icon,
  ListCheckIcon,
  ListOrderedIcon,
  ListSettingsFillIcon,
  ListSettingsLineIcon,
  ListUnorderedIcon,
  LiveFillIcon,
  LiveLineIcon,
  Loader2FillIcon,
  Loader2LineIcon,
  Loader3FillIcon,
  Loader3LineIcon,
  Loader4FillIcon,
  Loader4LineIcon,
  Loader5FillIcon,
  Loader5LineIcon,
  LoaderFillIcon,
  LoaderLineIcon,
  Lock2FillIcon,
  Lock2LineIcon,
  LockFillIcon,
  LockLineIcon,
  LockPasswordFillIcon,
  LockPasswordLineIcon,
  LockUnlockFillIcon,
  LockUnlockLineIcon,
  LoginBoxFillIcon,
  LoginBoxLineIcon,
  LoginCircleFillIcon,
  LoginCircleLineIcon,
  LogoutBoxFillIcon,
  LogoutBoxLineIcon,
  LogoutBoxRFillIcon,
  LogoutBoxRLineIcon,
  LogoutCircleFillIcon,
  LogoutCircleLineIcon,
  LogoutCircleRFillIcon,
  LogoutCircleRLineIcon,
  LuggageCartFillIcon,
  LuggageCartLineIcon,
  LuggageDepositFillIcon,
  LuggageDepositLineIcon,
  LungsFillIcon,
  LungsLineIcon,
  MacFillIcon,
  MacLineIcon,
  MacbookFillIcon,
  MacbookLineIcon,
  MagicFillIcon,
  MagicLineIcon,
  MailAddFillIcon,
  MailAddLineIcon,
  MailCheckFillIcon,
  MailCheckLineIcon,
  MailCloseFillIcon,
  MailCloseLineIcon,
  MailDownloadFillIcon,
  MailDownloadLineIcon,
  MailFillIcon,
  MailForbidFillIcon,
  MailForbidLineIcon,
  MailLineIcon,
  MailLockFillIcon,
  MailLockLineIcon,
  MailOpenFillIcon,
  MailOpenLineIcon,
  MailSendFillIcon,
  MailSendLineIcon,
  MailSettingsFillIcon,
  MailSettingsLineIcon,
  MailStarFillIcon,
  MailStarLineIcon,
  MailUnreadFillIcon,
  MailUnreadLineIcon,
  MailVolumeFillIcon,
  MailVolumeLineIcon,
  Map2FillIcon,
  Map2LineIcon,
  MapFillIcon,
  MapLineIcon,
  MapPin2FillIcon,
  MapPin2LineIcon,
  MapPin3FillIcon,
  MapPin3LineIcon,
  MapPin4FillIcon,
  MapPin4LineIcon,
  MapPin5FillIcon,
  MapPin5LineIcon,
  MapPinAddFillIcon,
  MapPinAddLineIcon,
  MapPinFillIcon,
  MapPinLineIcon,
  MapPinRangeFillIcon,
  MapPinRangeLineIcon,
  MapPinTimeFillIcon,
  MapPinTimeLineIcon,
  MapPinUserFillIcon,
  MapPinUserLineIcon,
  MarkPenFillIcon,
  MarkPenLineIcon,
  MarkdownFillIcon,
  MarkdownLineIcon,
  MarkupFillIcon,
  MarkupLineIcon,
  MastercardFillIcon,
  MastercardLineIcon,
  MastodonFillIcon,
  MastodonLineIcon,
  Medal2FillIcon,
  Medal2LineIcon,
  MedalFillIcon,
  MedalLineIcon,
  MedicineBottleFillIcon,
  MedicineBottleLineIcon,
  MediumFillIcon,
  MediumLineIcon,
  MenFillIcon,
  MenLineIcon,
  MentalHealthFillIcon,
  MentalHealthLineIcon,
  Menu2FillIcon,
  Menu2LineIcon,
  Menu3FillIcon,
  Menu3LineIcon,
  Menu4FillIcon,
  Menu4LineIcon,
  Menu5FillIcon,
  Menu5LineIcon,
  MenuAddFillIcon,
  MenuAddLineIcon,
  MenuFillIcon,
  MenuFoldFillIcon,
  MenuFoldLineIcon,
  MenuLineIcon,
  MenuUnfoldFillIcon,
  MenuUnfoldLineIcon,
  MergeCellsHorizontalIcon,
  MergeCellsVerticalIcon,
  Message2FillIcon,
  Message2LineIcon,
  Message3FillIcon,
  Message3LineIcon,
  MessageFillIcon,
  MessageLineIcon,
  MessengerFillIcon,
  MessengerLineIcon,
  MeteorFillIcon,
  MeteorLineIcon,
  Mic2FillIcon,
  Mic2LineIcon,
  MicFillIcon,
  MicLineIcon,
  MicOffFillIcon,
  MicOffLineIcon,
  MickeyFillIcon,
  MickeyLineIcon,
  MicroscopeFillIcon,
  MicroscopeLineIcon,
  MicrosoftFillIcon,
  MicrosoftLineIcon,
  MindMapIcon,
  MiniProgramFillIcon,
  MiniProgramLineIcon,
  MistFillIcon,
  MistLineIcon,
  MoneyCnyBoxFillIcon,
  MoneyCnyBoxLineIcon,
  MoneyCnyCircleFillIcon,
  MoneyCnyCircleLineIcon,
  MoneyDollarBoxFillIcon,
  MoneyDollarBoxLineIcon,
  MoneyDollarCircleFillIcon,
  MoneyDollarCircleLineIcon,
  MoneyEuroBoxFillIcon,
  MoneyEuroBoxLineIcon,
  MoneyEuroCircleFillIcon,
  MoneyEuroCircleLineIcon,
  MoneyPoundBoxFillIcon,
  MoneyPoundBoxLineIcon,
  MoneyPoundCircleFillIcon,
  MoneyPoundCircleLineIcon,
  MoonClearFillIcon,
  MoonClearLineIcon,
  MoonCloudyFillIcon,
  MoonCloudyLineIcon,
  MoonFillIcon,
  MoonFoggyFillIcon,
  MoonFoggyLineIcon,
  MoonLineIcon,
  More2FillIcon,
  More2LineIcon,
  MoreFillIcon,
  MoreLineIcon,
  MotorbikeFillIcon,
  MotorbikeLineIcon,
  MouseFillIcon,
  MouseLineIcon,
  Movie2FillIcon,
  Movie2LineIcon,
  MovieFillIcon,
  MovieLineIcon,
  Music2FillIcon,
  Music2LineIcon,
  MusicFillIcon,
  MusicLineIcon,
  MvFillIcon,
  MvLineIcon,
  NavigationFillIcon,
  NavigationLineIcon,
  NeteaseCloudMusicFillIcon,
  NeteaseCloudMusicLineIcon,
  NetflixFillIcon,
  NetflixLineIcon,
  NewspaperFillIcon,
  NewspaperLineIcon,
  NodeTreeIcon,
  Notification2FillIcon,
  Notification2LineIcon,
  Notification3FillIcon,
  Notification3LineIcon,
  Notification4FillIcon,
  Notification4LineIcon,
  NotificationBadgeFillIcon,
  NotificationBadgeLineIcon,
  NotificationFillIcon,
  NotificationLineIcon,
  NotificationOffFillIcon,
  NotificationOffLineIcon,
  NpmjsFillIcon,
  NpmjsLineIcon,
  Number0Icon,
  Number1Icon,
  Number2Icon,
  Number3Icon,
  Number4Icon,
  Number5Icon,
  Number6Icon,
  Number7Icon,
  Number8Icon,
  Number9Icon,
  NumbersFillIcon,
  NumbersLineIcon,
  NurseFillIcon,
  NurseLineIcon,
  OilFillIcon,
  OilLineIcon,
  OmegaIcon,
  OpenArmFillIcon,
  OpenArmLineIcon,
  OpenSourceFillIcon,
  OpenSourceLineIcon,
  OperaFillIcon,
  OperaLineIcon,
  OrderPlayFillIcon,
  OrderPlayLineIcon,
  OrganizationChartIcon,
  Outlet2FillIcon,
  Outlet2LineIcon,
  OutletFillIcon,
  OutletLineIcon,
  PageSeparatorIcon,
  PagesFillIcon,
  PagesLineIcon,
  PaintBrushFillIcon,
  PaintBrushLineIcon,
  PaintFillIcon,
  PaintLineIcon,
  PaletteFillIcon,
  PaletteLineIcon,
  PantoneFillIcon,
  PantoneLineIcon,
  ParagraphIcon,
  ParentFillIcon,
  ParentLineIcon,
  ParenthesesFillIcon,
  ParenthesesLineIcon,
  ParkingBoxFillIcon,
  ParkingBoxLineIcon,
  ParkingFillIcon,
  ParkingLineIcon,
  PassportFillIcon,
  PassportLineIcon,
  PatreonFillIcon,
  PatreonLineIcon,
  PauseCircleFillIcon,
  PauseCircleLineIcon,
  PauseFillIcon,
  PauseLineIcon,
  PauseMiniFillIcon,
  PauseMiniLineIcon,
  PaypalFillIcon,
  PaypalLineIcon,
  PenNibFillIcon,
  PenNibLineIcon,
  PencilFillIcon,
  PencilLineIcon,
  PencilRuler2FillIcon,
  PencilRuler2LineIcon,
  PencilRulerFillIcon,
  PencilRulerLineIcon,
  PercentFillIcon,
  PercentLineIcon,
  PhoneCameraFillIcon,
  PhoneCameraLineIcon,
  PhoneFillIcon,
  PhoneFindFillIcon,
  PhoneFindLineIcon,
  PhoneLineIcon,
  PhoneLockFillIcon,
  PhoneLockLineIcon,
  PictureInPicture2FillIcon,
  PictureInPicture2LineIcon,
  PictureInPictureExitFillIcon,
  PictureInPictureExitLineIcon,
  PictureInPictureFillIcon,
  PictureInPictureLineIcon,
  PieChart2FillIcon,
  PieChart2LineIcon,
  PieChartBoxFillIcon,
  PieChartBoxLineIcon,
  PieChartFillIcon,
  PieChartLineIcon,
  PinDistanceFillIcon,
  PinDistanceLineIcon,
  PingPongFillIcon,
  PingPongLineIcon,
  PinterestFillIcon,
  PinterestLineIcon,
  PinyinInputIcon,
  PixelfedFillIcon,
  PixelfedLineIcon,
  PlaneFillIcon,
  PlaneLineIcon,
  PlantFillIcon,
  PlantLineIcon,
  PlayCircleFillIcon,
  PlayCircleLineIcon,
  PlayFillIcon,
  PlayLineIcon,
  PlayList2FillIcon,
  PlayList2LineIcon,
  PlayListAddFillIcon,
  PlayListAddLineIcon,
  PlayListFillIcon,
  PlayListLineIcon,
  PlayMiniFillIcon,
  PlayMiniLineIcon,
  PlaystationFillIcon,
  PlaystationLineIcon,
  Plug2FillIcon,
  Plug2LineIcon,
  PlugFillIcon,
  PlugLineIcon,
  Polaroid2FillIcon,
  Polaroid2LineIcon,
  PolaroidFillIcon,
  PolaroidLineIcon,
  PoliceCarFillIcon,
  PoliceCarLineIcon,
  PriceTag2FillIcon,
  PriceTag2LineIcon,
  PriceTag3FillIcon,
  PriceTag3LineIcon,
  PriceTagFillIcon,
  PriceTagLineIcon,
  PrinterCloudFillIcon,
  PrinterCloudLineIcon,
  PrinterFillIcon,
  PrinterLineIcon,
  ProductHuntFillIcon,
  ProductHuntLineIcon,
  ProfileFillIcon,
  ProfileLineIcon,
  Projector2FillIcon,
  Projector2LineIcon,
  ProjectorFillIcon,
  ProjectorLineIcon,
  PsychotherapyFillIcon,
  PsychotherapyLineIcon,
  PulseFillIcon,
  PulseLineIcon,
  Pushpin2FillIcon,
  Pushpin2LineIcon,
  PushpinFillIcon,
  PushpinLineIcon,
  QqFillIcon,
  QqLineIcon,
  QrCodeFillIcon,
  QrCodeLineIcon,
  QrScan2FillIcon,
  QrScan2LineIcon,
  QrScanFillIcon,
  QrScanLineIcon,
  QuestionAnswerFillIcon,
  QuestionAnswerLineIcon,
  QuestionFillIcon,
  QuestionLineIcon,
  QuestionMarkIcon,
  QuestionnaireFillIcon,
  QuestionnaireLineIcon,
  QuillPenFillIcon,
  QuillPenLineIcon,
  RadarFillIcon,
  RadarLineIcon,
  Radio2FillIcon,
  Radio2LineIcon,
  RadioButtonFillIcon,
  RadioButtonLineIcon,
  RadioFillIcon,
  RadioLineIcon,
  RainbowFillIcon,
  RainbowLineIcon,
  RainyFillIcon,
  RainyLineIcon,
  ReactjsFillIcon,
  ReactjsLineIcon,
  RecordCircleFillIcon,
  RecordCircleLineIcon,
  RecordMailFillIcon,
  RecordMailLineIcon,
  RecycleFillIcon,
  RecycleLineIcon,
  RedPacketFillIcon,
  RedPacketLineIcon,
  RedditFillIcon,
  RedditLineIcon,
  RefreshFillIcon,
  RefreshLineIcon,
  Refund2FillIcon,
  Refund2LineIcon,
  RefundFillIcon,
  RefundLineIcon,
  RegisteredFillIcon,
  RegisteredLineIcon,
  RemixiconFillIcon,
  RemixiconLineIcon,
  RemoteControl2FillIcon,
  RemoteControl2LineIcon,
  RemoteControlFillIcon,
  RemoteControlLineIcon,
  Repeat2FillIcon,
  Repeat2LineIcon,
  RepeatFillIcon,
  RepeatLineIcon,
  RepeatOneFillIcon,
  RepeatOneLineIcon,
  ReplyAllFillIcon,
  ReplyAllLineIcon,
  ReplyFillIcon,
  ReplyLineIcon,
  ReservedFillIcon,
  ReservedLineIcon,
  RestTimeFillIcon,
  RestTimeLineIcon,
  RestartFillIcon,
  RestartLineIcon,
  Restaurant2FillIcon,
  Restaurant2LineIcon,
  RestaurantFillIcon,
  RestaurantLineIcon,
  RewindFillIcon,
  RewindLineIcon,
  RewindMiniFillIcon,
  RewindMiniLineIcon,
  RhythmFillIcon,
  RhythmLineIcon,
  RidingFillIcon,
  RidingLineIcon,
  RoadMapFillIcon,
  RoadMapLineIcon,
  RoadsterFillIcon,
  RoadsterLineIcon,
  RobotFillIcon,
  RobotLineIcon,
  Rocket2FillIcon,
  Rocket2LineIcon,
  RocketFillIcon,
  RocketLineIcon,
  RotateLockFillIcon,
  RotateLockLineIcon,
  RoundedCornerIcon,
  RouteFillIcon,
  RouteLineIcon,
  RouterFillIcon,
  RouterLineIcon,
  RssFillIcon,
  RssLineIcon,
  Ruler2FillIcon,
  Ruler2LineIcon,
  RulerFillIcon,
  RulerLineIcon,
  RunFillIcon,
  RunLineIcon,
  SafariFillIcon,
  SafariLineIcon,
  Safe2FillIcon,
  Safe2LineIcon,
  SafeFillIcon,
  SafeLineIcon,
  SailboatFillIcon,
  SailboatLineIcon,
  Save2FillIcon,
  Save2LineIcon,
  Save3FillIcon,
  Save3LineIcon,
  SaveFillIcon,
  SaveLineIcon,
  Scales2FillIcon,
  Scales2LineIcon,
  Scales3FillIcon,
  Scales3LineIcon,
  ScalesFillIcon,
  ScalesLineIcon,
  Scan2FillIcon,
  Scan2LineIcon,
  ScanFillIcon,
  ScanLineIcon,
  Scissors2FillIcon,
  Scissors2LineIcon,
  ScissorsCutFillIcon,
  ScissorsCutLineIcon,
  ScissorsFillIcon,
  ScissorsLineIcon,
  Screenshot2FillIcon,
  Screenshot2LineIcon,
  ScreenshotFillIcon,
  ScreenshotLineIcon,
  SdCardFillIcon,
  SdCardLineIcon,
  SdCardMiniFillIcon,
  SdCardMiniLineIcon,
  Search2FillIcon,
  Search2LineIcon,
  SearchEyeFillIcon,
  SearchEyeLineIcon,
  SearchFillIcon,
  SearchLineIcon,
  SecurePaymentFillIcon,
  SecurePaymentLineIcon,
  SeedlingFillIcon,
  SeedlingLineIcon,
  SendBackwardIcon,
  SendPlane2FillIcon,
  SendPlane2LineIcon,
  SendPlaneFillIcon,
  SendPlaneLineIcon,
  SendToBackIcon,
  SensorFillIcon,
  SensorLineIcon,
  SeparatorIcon,
  ServerFillIcon,
  ServerLineIcon,
  ServiceFillIcon,
  ServiceLineIcon,
  Settings2FillIcon,
  Settings2LineIcon,
  Settings3FillIcon,
  Settings3LineIcon,
  Settings4FillIcon,
  Settings4LineIcon,
  Settings5FillIcon,
  Settings5LineIcon,
  Settings6FillIcon,
  Settings6LineIcon,
  SettingsFillIcon,
  SettingsLineIcon,
  Shape2FillIcon,
  Shape2LineIcon,
  ShapeFillIcon,
  ShapeLineIcon,
  ShareBoxFillIcon,
  ShareBoxLineIcon,
  ShareCircleFillIcon,
  ShareCircleLineIcon,
  ShareFillIcon,
  ShareForward2FillIcon,
  ShareForward2LineIcon,
  ShareForwardBoxFillIcon,
  ShareForwardBoxLineIcon,
  ShareForwardFillIcon,
  ShareForwardLineIcon,
  ShareLineIcon,
  ShieldCheckFillIcon,
  ShieldCheckLineIcon,
  ShieldCrossFillIcon,
  ShieldCrossLineIcon,
  ShieldFillIcon,
  ShieldFlashFillIcon,
  ShieldFlashLineIcon,
  ShieldKeyholeFillIcon,
  ShieldKeyholeLineIcon,
  ShieldLineIcon,
  ShieldStarFillIcon,
  ShieldStarLineIcon,
  ShieldUserFillIcon,
  ShieldUserLineIcon,
  Ship2FillIcon,
  Ship2LineIcon,
  ShipFillIcon,
  ShipLineIcon,
  ShirtFillIcon,
  ShirtLineIcon,
  ShoppingBag2FillIcon,
  ShoppingBag2LineIcon,
  ShoppingBag3FillIcon,
  ShoppingBag3LineIcon,
  ShoppingBagFillIcon,
  ShoppingBagLineIcon,
  ShoppingBasket2FillIcon,
  ShoppingBasket2LineIcon,
  ShoppingBasketFillIcon,
  ShoppingBasketLineIcon,
  ShoppingCart2FillIcon,
  ShoppingCart2LineIcon,
  ShoppingCartFillIcon,
  ShoppingCartLineIcon,
  ShowersFillIcon,
  ShowersLineIcon,
  ShuffleFillIcon,
  ShuffleLineIcon,
  ShutDownFillIcon,
  ShutDownLineIcon,
  SideBarFillIcon,
  SideBarLineIcon,
  SignalTowerFillIcon,
  SignalTowerLineIcon,
  SignalWifi1FillIcon,
  SignalWifi1LineIcon,
  SignalWifi2FillIcon,
  SignalWifi2LineIcon,
  SignalWifi3FillIcon,
  SignalWifi3LineIcon,
  SignalWifiErrorFillIcon,
  SignalWifiErrorLineIcon,
  SignalWifiFillIcon,
  SignalWifiLineIcon,
  SignalWifiOffFillIcon,
  SignalWifiOffLineIcon,
  SimCard2FillIcon,
  SimCard2LineIcon,
  SimCardFillIcon,
  SimCardLineIcon,
  SingleQuotesLIcon,
  SingleQuotesRIcon,
  SipFillIcon,
  SipLineIcon,
  SkipBackFillIcon,
  SkipBackLineIcon,
  SkipBackMiniFillIcon,
  SkipBackMiniLineIcon,
  SkipForwardFillIcon,
  SkipForwardLineIcon,
  SkipForwardMiniFillIcon,
  SkipForwardMiniLineIcon,
  Skull2FillIcon,
  Skull2LineIcon,
  SkullFillIcon,
  SkullLineIcon,
  SkypeFillIcon,
  SkypeLineIcon,
  SlackFillIcon,
  SlackLineIcon,
  SliceFillIcon,
  SliceLineIcon,
  Slideshow2FillIcon,
  Slideshow2LineIcon,
  Slideshow3FillIcon,
  Slideshow3LineIcon,
  Slideshow4FillIcon,
  Slideshow4LineIcon,
  SlideshowFillIcon,
  SlideshowLineIcon,
  SmartphoneFillIcon,
  SmartphoneLineIcon,
  SnapchatFillIcon,
  SnapchatLineIcon,
  SnowyFillIcon,
  SnowyLineIcon,
  SortAscIcon,
  SortDescIcon,
  SoundModuleFillIcon,
  SoundModuleLineIcon,
  SoundcloudFillIcon,
  SoundcloudLineIcon,
  SpaceIcon,
  SpaceShipFillIcon,
  SpaceShipLineIcon,
  Spam2FillIcon,
  Spam2LineIcon,
  Spam3FillIcon,
  Spam3LineIcon,
  SpamFillIcon,
  SpamLineIcon,
  Speaker2FillIcon,
  Speaker2LineIcon,
  Speaker3FillIcon,
  Speaker3LineIcon,
  SpeakerFillIcon,
  SpeakerLineIcon,
  SpectrumFillIcon,
  SpectrumLineIcon,
  SpeedFillIcon,
  SpeedLineIcon,
  SpeedMiniFillIcon,
  SpeedMiniLineIcon,
  SplitCellsHorizontalIcon,
  SplitCellsVerticalIcon,
  SpotifyFillIcon,
  SpotifyLineIcon,
  SpyFillIcon,
  SpyLineIcon,
  StackFillIcon,
  StackLineIcon,
  StackOverflowFillIcon,
  StackOverflowLineIcon,
  StackshareFillIcon,
  StackshareLineIcon,
  StarFillIcon,
  StarHalfFillIcon,
  StarHalfLineIcon,
  StarHalfSFillIcon,
  StarHalfSLineIcon,
  StarLineIcon,
  StarSFillIcon,
  StarSLineIcon,
  StarSmileFillIcon,
  StarSmileLineIcon,
  SteamFillIcon,
  SteamLineIcon,
  Steering2FillIcon,
  Steering2LineIcon,
  SteeringFillIcon,
  SteeringLineIcon,
  StethoscopeFillIcon,
  StethoscopeLineIcon,
  StickyNote2FillIcon,
  StickyNote2LineIcon,
  StickyNoteFillIcon,
  StickyNoteLineIcon,
  StockFillIcon,
  StockLineIcon,
  StopCircleFillIcon,
  StopCircleLineIcon,
  StopFillIcon,
  StopLineIcon,
  StopMiniFillIcon,
  StopMiniLineIcon,
  Store2FillIcon,
  Store2LineIcon,
  Store3FillIcon,
  Store3LineIcon,
  StoreFillIcon,
  StoreLineIcon,
  Strikethrough2Icon,
  StrikethroughIcon,
  Subscript2Icon,
  SubscriptIcon,
  SubtractFillIcon,
  SubtractLineIcon,
  SubwayFillIcon,
  SubwayLineIcon,
  SubwayWifiFillIcon,
  SubwayWifiLineIcon,
  Suitcase2FillIcon,
  Suitcase2LineIcon,
  Suitcase3FillIcon,
  Suitcase3LineIcon,
  SuitcaseFillIcon,
  SuitcaseLineIcon,
  SunCloudyFillIcon,
  SunCloudyLineIcon,
  SunFillIcon,
  SunFoggyFillIcon,
  SunFoggyLineIcon,
  SunLineIcon,
  Superscript2Icon,
  SuperscriptIcon,
  SurgicalMaskFillIcon,
  SurgicalMaskLineIcon,
  SurroundSoundFillIcon,
  SurroundSoundLineIcon,
  SurveyFillIcon,
  SurveyLineIcon,
  SwapBoxFillIcon,
  SwapBoxLineIcon,
  SwapFillIcon,
  SwapLineIcon,
  SwitchFillIcon,
  SwitchLineIcon,
  SwordFillIcon,
  SwordLineIcon,
  SyringeFillIcon,
  SyringeLineIcon,
  TBoxFillIcon,
  TBoxLineIcon,
  TShirt2FillIcon,
  TShirt2LineIcon,
  TShirtAirFillIcon,
  TShirtAirLineIcon,
  TShirtFillIcon,
  TShirtLineIcon,
  Table2Icon,
  TableAltFillIcon,
  TableAltLineIcon,
  TableFillIcon,
  TableLineIcon,
  TabletFillIcon,
  TabletLineIcon,
  TakeawayFillIcon,
  TakeawayLineIcon,
  TaobaoFillIcon,
  TaobaoLineIcon,
  TapeFillIcon,
  TapeLineIcon,
  TaskFillIcon,
  TaskLineIcon,
  TaxiFillIcon,
  TaxiLineIcon,
  TaxiWifiFillIcon,
  TaxiWifiLineIcon,
  TeamFillIcon,
  TeamLineIcon,
  TelegramFillIcon,
  TelegramLineIcon,
  TempColdFillIcon,
  TempColdLineIcon,
  TempHotFillIcon,
  TempHotLineIcon,
  TerminalBoxFillIcon,
  TerminalBoxLineIcon,
  TerminalFillIcon,
  TerminalLineIcon,
  TerminalWindowFillIcon,
  TerminalWindowLineIcon,
  TestTubeFillIcon,
  TestTubeLineIcon,
  TextDirectionLIcon,
  TextDirectionRIcon,
  TextIcon,
  TextSpacingIcon,
  TextWrapIcon,
  ThermometerFillIcon,
  ThermometerLineIcon,
  ThumbDownFillIcon,
  ThumbDownLineIcon,
  ThumbUpFillIcon,
  ThumbUpLineIcon,
  ThunderstormsFillIcon,
  ThunderstormsLineIcon,
  Ticket2FillIcon,
  Ticket2LineIcon,
  TicketFillIcon,
  TicketLineIcon,
  TimeFillIcon,
  TimeLineIcon,
  Timer2FillIcon,
  Timer2LineIcon,
  TimerFillIcon,
  TimerFlashFillIcon,
  TimerFlashLineIcon,
  TimerLineIcon,
  TodoFillIcon,
  TodoLineIcon,
  ToggleFillIcon,
  ToggleLineIcon,
  ToolsFillIcon,
  ToolsLineIcon,
  TornadoFillIcon,
  TornadoLineIcon,
  TrademarkFillIcon,
  TrademarkLineIcon,
  TrafficLightFillIcon,
  TrafficLightLineIcon,
  TrainFillIcon,
  TrainLineIcon,
  TrainWifiFillIcon,
  TrainWifiLineIcon,
  Translate2Icon,
  TranslateIcon,
  TravestiFillIcon,
  TravestiLineIcon,
  TreasureMapFillIcon,
  TreasureMapLineIcon,
  TrelloFillIcon,
  TrelloLineIcon,
  TrophyFillIcon,
  TrophyLineIcon,
  TruckFillIcon,
  TruckLineIcon,
  TumblrFillIcon,
  TumblrLineIcon,
  Tv2FillIcon,
  Tv2LineIcon,
  TvFillIcon,
  TvLineIcon,
  TwentyFourHoursFillIcon,
  TwentyFourHoursLineIcon,
  TwitchFillIcon,
  TwitchLineIcon,
  TwitterFillIcon,
  TwitterLineIcon,
  TyphoonFillIcon,
  TyphoonLineIcon,
  UDiskFillIcon,
  UDiskLineIcon,
  UbuntuFillIcon,
  UbuntuLineIcon,
  UmbrellaFillIcon,
  UmbrellaLineIcon,
  UnderlineIcon,
  UninstallFillIcon,
  UninstallLineIcon,
  UnsplashFillIcon,
  UnsplashLineIcon,
  Upload2FillIcon,
  Upload2LineIcon,
  UploadCloud2FillIcon,
  UploadCloud2LineIcon,
  UploadCloudFillIcon,
  UploadCloudLineIcon,
  UploadFillIcon,
  UploadLineIcon,
  UsbFillIcon,
  UsbLineIcon,
  User2FillIcon,
  User2LineIcon,
  User3FillIcon,
  User3LineIcon,
  User4FillIcon,
  User4LineIcon,
  User5FillIcon,
  User5LineIcon,
  User6FillIcon,
  User6LineIcon,
  UserAddFillIcon,
  UserAddLineIcon,
  UserFillIcon,
  UserFollowFillIcon,
  UserFollowLineIcon,
  UserHeartFillIcon,
  UserHeartLineIcon,
  UserLineIcon,
  UserLocationFillIcon,
  UserLocationLineIcon,
  UserReceived2FillIcon,
  UserReceived2LineIcon,
  UserReceivedFillIcon,
  UserReceivedLineIcon,
  UserSearchFillIcon,
  UserSearchLineIcon,
  UserSettingsFillIcon,
  UserSettingsLineIcon,
  UserShared2FillIcon,
  UserShared2LineIcon,
  UserSharedFillIcon,
  UserSharedLineIcon,
  UserSmileFillIcon,
  UserSmileLineIcon,
  UserStarFillIcon,
  UserStarLineIcon,
  UserUnfollowFillIcon,
  UserUnfollowLineIcon,
  UserVoiceFillIcon,
  UserVoiceLineIcon,
  VideoAddFillIcon,
  VideoAddLineIcon,
  VideoChatFillIcon,
  VideoChatLineIcon,
  VideoDownloadFillIcon,
  VideoDownloadLineIcon,
  VideoFillIcon,
  VideoLineIcon,
  VideoUploadFillIcon,
  VideoUploadLineIcon,
  Vidicon2FillIcon,
  Vidicon2LineIcon,
  VidiconFillIcon,
  VidiconLineIcon,
  VimeoFillIcon,
  VimeoLineIcon,
  VipCrown2FillIcon,
  VipCrown2LineIcon,
  VipCrownFillIcon,
  VipCrownLineIcon,
  VipDiamondFillIcon,
  VipDiamondLineIcon,
  VipFillIcon,
  VipLineIcon,
  VirusFillIcon,
  VirusLineIcon,
  VisaFillIcon,
  VisaLineIcon,
  VoiceRecognitionFillIcon,
  VoiceRecognitionLineIcon,
  VoiceprintFillIcon,
  VoiceprintLineIcon,
  VolumeDownFillIcon,
  VolumeDownLineIcon,
  VolumeMuteFillIcon,
  VolumeMuteLineIcon,
  VolumeOffVibrateFillIcon,
  VolumeOffVibrateLineIcon,
  VolumeUpFillIcon,
  VolumeUpLineIcon,
  VolumeVibrateFillIcon,
  VolumeVibrateLineIcon,
  VuejsFillIcon,
  VuejsLineIcon,
  WalkFillIcon,
  WalkLineIcon,
  Wallet2FillIcon,
  Wallet2LineIcon,
  Wallet3FillIcon,
  Wallet3LineIcon,
  WalletFillIcon,
  WalletLineIcon,
  WaterFlashFillIcon,
  WaterFlashLineIcon,
  WebcamFillIcon,
  WebcamLineIcon,
  Wechat2FillIcon,
  Wechat2LineIcon,
  WechatFillIcon,
  WechatLineIcon,
  WechatPayFillIcon,
  WechatPayLineIcon,
  WeiboFillIcon,
  WeiboLineIcon,
  WhatsappFillIcon,
  WhatsappLineIcon,
  WheelchairFillIcon,
  WheelchairLineIcon,
  WifiFillIcon,
  WifiLineIcon,
  WifiOffFillIcon,
  WifiOffLineIcon,
  Window2FillIcon,
  Window2LineIcon,
  WindowFillIcon,
  WindowLineIcon,
  WindowsFillIcon,
  WindowsLineIcon,
  WindyFillIcon,
  WindyLineIcon,
  WirelessChargingFillIcon,
  WirelessChargingLineIcon,
  WomenFillIcon,
  WomenLineIcon,
  WubiInputIcon,
  XboxFillIcon,
  XboxLineIcon,
  XingFillIcon,
  XingLineIcon,
  YoutubeFillIcon,
  YoutubeLineIcon,
  ZcoolFillIcon,
  ZcoolLineIcon,
  ZhihuFillIcon,
  ZhihuLineIcon,
  ZoomInFillIcon,
  ZoomInLineIcon,
  ZoomOutFillIcon,
  ZoomOutLineIcon,
  ZzzFillIcon,
  ZzzLineIcon
};
