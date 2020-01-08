const Frame = require("@nativescript/core/ui/frame").Frame;

export class ButtonsModel {
    goBack() {
        Frame.topmost().goBack();
    }
}

export function navigatingTo({ object: page }) {
    page.bindingContext = new ButtonsModel();
}
