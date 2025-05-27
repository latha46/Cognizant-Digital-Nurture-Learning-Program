// _custom-variables.scss

$primary: #ff6600 !default;       // Change primary color to bright orange
$border-radius: 1.5rem !default;  // Increase border radius
// custom.scss

@import "node_modules/bootstrap/scss/functions";

// Import custom variables BEFORE Bootstrap variables (to override)
@import "custom-variables";

@import "node_modules/bootstrap/scss<link href="custom.css" rel="stylesheet" />
variables";
@import "node_modules/bootstrap/scss/mixins";
@import "node_modules/bootstrap/scss/bootstrap";
npx sass custom.scss custom.css --no-source-map
