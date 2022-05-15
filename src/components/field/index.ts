import * as Handlebars from "handlebars";
// @ts-ignore
import tmpl from "./field.hbs";
import "./field.css";
import fieldInterface from "../../interfaces/fieldInterface";

const field = (
  name: string = "",
  label: string = "",
  placeholder: string = "",
  type: string = "text",
  icon: () => string = null,
  value: string = "",
  isReadonly: boolean = false
): string => {
  let customStyles = "";
  const readonly = isReadonly ? "readonly" : "";
  if (label === undefined) {
    if (name === undefined) {
      name = "Name";
    }
    label = name;
  }
  if (name === undefined) {
    name = label;
  }

  if (type === "search") {
    type = "text";
    label = "";
    customStyles = "search-input";
  }
  if (type === "send-message") {
    type = "text";
    label = "";
    customStyles = "send-message";
  }
  if (type === "input_profile") {
    type = "text";
    customStyles = "input_profile";
  }
  Handlebars.registerHelper(
    "labelShow",
    function (name: string, label: string) {
      if (label.length) {
        return new Handlebars.SafeString(
          "<label class='label' for='" + name + "'>" + label + "</label>"
        );
      }
    }
  );
  console.log("icon", icon);
  return tmpl({
    name: name,
    label: label,
    placeholder: placeholder,
    type: type,
    customStyles: customStyles,
    icon: icon,
    value: value,
    readonly: readonly,
  });
};

export const Field = (data: fieldInterface) => {
  const template = Handlebars.compile(
    field(
      data.name,
      data.label,
      data.placeholder,
      data.type,
      data.icon,
      data.value,
      data.isReadonly
    )
  );

  return template({ data });
};
