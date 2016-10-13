Browserify & webpackのdepend対応makefileサンプル
================================================

# 概要

Browserifyとwebpackでmakefileによるバンドルサンプルです、dependに対応している為不要な再バンドルをskip出来ます。  
実行にはUnixコマンド環境が必要です。

詳しくは[Qiitaの記事](http://qiita.com/wordijp/items/3491cc7713f3191f75a4)をご覧ください。

# usage

```
# Browserify Ver
$ cd browserify-sample
$ make depend
$ make

# webpack Ver
$ cd webpack-sample
$ make depend
$ make
```

# license

MIT
