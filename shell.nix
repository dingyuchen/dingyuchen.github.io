with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "node";
    buildInputs = [
        nodejs
        npm
    ];
    # shellHook = ''
    #     export PATH="$PWD/node_modules/.bin/:$PATH"
    # '';
}