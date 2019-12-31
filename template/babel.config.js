module.exports = {
    "presets": ["@babel/preset-react", "@babel/env"],
    "plugins": [
        "@babel/plugin-transform-runtime",
        "react-hot-loader/babel",
        ["@babel/plugin-proposal-class-properties", {"loose": true}],
    ],
    "env": {
        "production": {
            "plugins": [["transform-remove-console", { "exclude": ["error", "warn"] }]]
        }
    }
}