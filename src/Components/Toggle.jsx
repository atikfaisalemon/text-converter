import { memo, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Field, Label, Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Toggle = memo(() => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("dark");
      toast("Dark Mode On!", {
        icon: "👏",
        style: {
          background: "white",
        },
        duration: 1000,
        position: "top-right",
      });
    } else {
      document.documentElement.classList.remove("dark");
      toast("Light Mode On", {
        icon: "👏",
        style: {
          background: "#333",
          color: "#fff",
        },
        duration: 1000,
        position: "top-right",
      });
    }
  }, [enabled]);

  return (
    <Field as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? "bg-indigo-600" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
      <Label as="span" className="ml-3 text-sm">
        <span
          className={`font-medium ${enabled ? "text-white" : "text-gray-900"}`}
        >
          {enabled ? "Dark mode" : "Light mode"}
        </span>
      </Label>
    </Field>
  );
});

Toggle.displayName = "Toggle";
