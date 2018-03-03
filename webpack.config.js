const path = require('path')

const getEntrySources = (sources) => {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080')
        sources.push('webpack/hot/only-dev-server')
    }

    return sources
}

module.exports = {
    entry: {
        index: getEntrySources(['./src/index.js'])
    },
    output: {
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: ['jsx-loader', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, './src'),
            'node_modules'
        ]
    }
}
