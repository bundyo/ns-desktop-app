const Frame = require("@nativescript/core/ui/frame").Frame;

const Observable = require("@nativescript/core/data/observable").Observable;
const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

const ViewModelItem = (function () {
    function ViewModelItem(title, info) {
        this.title = title;
        this.info = info;
    }
    return ViewModelItem;
}());

exports.ViewModelItem = ViewModelItem;

function createViewModel() {
    const viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = () => {
        viewModel.counter--;
        viewModel.set("message", getMessage(viewModel.counter));
    };

    viewModel.toButtons = () => {
        Frame.topmost().navigate({
            moduleName: `buttons`,
            transition: {
                name: "slide"
            }
        });
    };

    const items = new ObservableArray();
    for (let i = 0; i < 20; i++) {
        items.push(new ViewModelItem("Item " + i, "This is the item with number " + i + "."));
    }

    viewModel.set("items", items);

    return viewModel;
}

exports.createViewModel = createViewModel;
