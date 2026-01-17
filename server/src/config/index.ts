import 'dotenv/config';

export default {
  PORT: process.env.PORT || 3000,
  dataUrl: process.env.DATABASE_URL,
  nodeEnv: process.env.NODE_ENV || 'development',
  secretKey:
    process.env.COOKIE_SECRET ||
    '&rq)*jf@ff2x!$6k&eq++v+zjy!$ed0@vd)7lov&b37(ah2u8u',
  serverHost: process.env.SERVER_HOST || `http://localhost:${process.env.PORT || 3000}/`,
  allowHost: process.env.TRUSTED_ORIGINS?.split(',') || [],
};
