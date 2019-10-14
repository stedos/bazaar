export const bazaarData = () => ({
  id: "" + Math.floor(Math.random() * Math.pow(10, 6)),
  date: new Date().toUTCString("de"),
  lastBillId: 0,
  bills: {},
  name: ""
});
