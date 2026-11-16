const VARIANTS = {
  dev: { name: 'Dummy (Dev)', idSuffix: '.dev' },
  sit: { name: 'Dummy (SIT)', idSuffix: '.sit' },
  prod: { name: 'Pipeline Dummy', idSuffix: '' },
};

const variant = process.env.APP_VARIANT || 'dev';

if (!VARIANTS[variant]) {
  throw new Error(`APP_VARIANT must be dev, sit or prod. Got "${variant}".`);
}

const BASE_ID = 'com.pipelinedummy.mobile';
const appId = BASE_ID + VARIANTS[variant].idSuffix;
const buildNumber = process.env.BUILD_NUMBER || '1';

export default ({ config }) => ({
  ...config,
  name: VARIANTS[variant].name,
  ios: {
    ...config.ios,
    bundleIdentifier: appId,
    buildNumber,
  },
  android: {
    ...config.android,
    package: appId,
    versionCode: Number(buildNumber),
  },
  extra: {
    ...config.extra,
    variant,
    buildNumber,
  },
});
