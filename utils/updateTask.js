import createDiv from "./createDiv.js";
import {
  inputStyle,
  updateButtonCloseStyle,
  updateButtonSucessStyle,
  containerButtonsStyle,
} from "../styles/js/styleUpdate.js";
import $ from "../utils/selector.js";
import unload from "../handler/unload.js";


const updateDivsElements = (parent, value) => {
  let containerTaskUpdate = $(".containerTaskUpdate", parent);
  if (containerTaskUpdate) {
    return {
      containerTaskUpdate,
      inputUpdateTask: $(".inputUpdate"),
      containerUpdateButtons: $(".containerUpdateButtons"),
      updateButtonSuccessElement: $(".successUpdate"),
      updateButtonCloseElement: $(".closeUpdate"),
    };
  }

  containerTaskUpdate = createDiv("div", parent, "containerTaskUpdate")

  const inputAttributes = {
    type: "text",
    placeholder: `Vous souhaitez modifier le mot ${value}`,
  };

  const inputUpdateTask = createDiv(
    "input",
    containerTaskUpdate,
    "inputUpdate",
    null,
    inputStyle,
    inputAttributes,
  );

  const containerUpdateButtons = createDiv(
    "div",
    containerTaskUpdate,
    "containerUpdateButtons",
    null,
    containerButtonsStyle,
  );

  const updateButtonSuccessElement = createDiv(
    "button",
    containerUpdateButtons,
    "successUpdate",
    "Valider",
    updateButtonSucessStyle,
  );

  const updateButtonCloseElement = createDiv(
    "button",
    containerUpdateButtons,
    "closeUpdate",
    "Close",
    updateButtonCloseStyle,
  );

  return {
    containerTaskUpdate,
    inputUpdateTask,
    containerUpdateButtons,
    updateButtonSuccessElement,
    updateButtonCloseElement,
  };
};

export default (value, parent, todolist) => {
  const {
    containerTaskUpdate,
    updateButtonSuccessElement,
    updateButtonCloseElement,
  } = updateDivsElements(parent.parentElement, value);



  const displayChilds = (choose) => {
    if (choose == "show") {
      parent.style.display = "flex";
      containerTaskUpdate.style.display = "none";
    } else if (choose == "hide") {
      containerTaskUpdate.style.display = "flex";
      parent.style.display = "none";
    }
  };

  displayChilds("hide");

  updateButtonCloseElement.addEventListener("click", (e) => {
    displayChilds("show");
  });

  updateButtonSuccessElement.addEventListener("click", (e) => {
    displayChilds("hide");
    const taskName = $(".taskName", e.target.closest('.task'))
    const input = e.target.parentElement.previousSibling

    console.log(e.target.closest('.inputUpdate'), "yooo")
    input.placeholder = `Vous souhaitez modifier le mot ${input.value} .`

    const result = [...todolist].map(element => {
      if (element === taskName.textContent) {
        element = input.value
        return element
      }
      return element
    });

    todolist = new Set(result)

    unload(todolist)

    taskName.innerHTML = input.value
  });
};
