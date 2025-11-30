
  # Modern Minimal Portfolio Website

  This is a code bundle for Modern Minimal Portfolio Website. The original project is available at https://www.figma.com/design/xCYA92phXgNdDkvdYdyGYE/Modern-Minimal-Portfolio-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Halftone paper background

  This project has a subtle halftone "paper" texture applied globally. It is implemented in `src/styles/globals.css` and uses a tiny tiled SVG to recreate a light dotted halftone on the page background. The background color uses `#F4F4F4` as the base and the dot opacity is kept very low (≈ 0.08–0.10) so text remains readable.

  If you'd like to use the same halftone look inside Visual Studio Code, there's a helper file at `.vscode/halftone-vscode.css` which you can load with a custom CSS extension (for example, "Custom CSS and JS Loader"). After placing or pointing your extension to that CSS, follow the extension instructions to enable and reload custom CSS in VS Code.
  