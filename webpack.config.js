const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const moduleFederationConfig = withModuleFederationPlugin({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

if (process.env.NODE_ENV === "development") {
  moduleFederationConfig.output.publicPath = "https://dev-url-del-mf/";
} else if (process.env.NODE_ENV === "production") {
  moduleFederationConfig.output.publicPath = "https://prod-url-del-mf/";
} else {
  moduleFederationConfig.output.publicPath = "http://localhost:4200/";
}

module.exports = moduleFederationConfig;
