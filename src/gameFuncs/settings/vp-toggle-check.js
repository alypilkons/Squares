/* global jQuery aly_gameInfo */

const VPtoggleCheck = () => {
  if (aly_gameInfo.VPtoggle === 'purple') {
    jQuery('#colorPaletteContainer .color6').text('p');
  } else {
    jQuery('#colorPaletteContainer .color6').text('v');
  }
};

export default VPtoggleCheck;