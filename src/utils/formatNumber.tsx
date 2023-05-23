export function formatNumber(number:Number):String {
  
    return "#".concat(String(number).padStart(3, '0'));
}