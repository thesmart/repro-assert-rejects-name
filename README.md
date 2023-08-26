# repro-assert-rejects-name

Reproduces a bug in `assert.rejects` where the `name` test doesn't respect the constructor name for subcasses of Error.
