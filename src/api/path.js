const WORKFLOW_URL = () =>
  `http://app.tgip.in/RestaurantAPIOnlineV1.asmx`;
const paths = {
  checkVersionAPI: (userId) =>
    `${WORKFLOW_URL()}/CheckAppVersionV1`,
};

export default paths;
