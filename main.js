requirejs.config({
    baseUrl: './dist',
    waitSeconds: 20,

    deps: ['Game'],

    urlArgs: "t=20160320000000" //flusing cache, do not use in production
});

