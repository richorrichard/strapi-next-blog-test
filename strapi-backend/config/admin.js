module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '05a449e7770d9d6d5b442af4fe5c22f5'),
  },
});
