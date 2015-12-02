# cljs-demo

This is a small clojurescript demo with figwheel.

## Requirements

If you want the full power of your terminal in the ClojureScript REPL, first install `rlwrap`and then start the REPL:

```
brew install rlwrap
```

## Usage

To start the REPL:
```
rlwrap lein repl
```

In the REPL, start the system using :

```
(reset)
```
Then go to `http://localhost:3449`.

To connect to a ClojureScript REPL in your browser, type in :

```
(cljs-repl)
```

Now you can manipulate the browser and inspect/change its state:

```
(js/alert "123")
cljs-demo.state/app-state
```

To quit the ClojureScript REPL

```
:cljs/quit
```

## License

Copyright © 2015 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
