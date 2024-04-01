const e2p = (s:string) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);

const p2e = (s:string) =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString() );

const sp = (number:string) => {
  console.log(number)
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
    console.log(seperatedNumber)
  const joinedNumber = seperatedNumber!.join(",");
  console.log(joinedNumber,e2p(joinedNumber))
  return e2p(joinedNumber);
};

export { e2p, p2e, sp };