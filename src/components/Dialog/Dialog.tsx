

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./Dialog.scss"; 

const DialogComponent: React.FC = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">Editar Perfil</button>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Editar Perfil</Dialog.Title>
        <Dialog.Description className="DialogDescription">

        </Dialog.Description>

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" defaultValue="Felipe Helen Gabrielle" />
        </fieldset>

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" defaultValue="@40028922" />
        </fieldset>

        <div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
          <Dialog.Close asChild>
            <button className="Button green">Salvar Mudanças</button>
          </Dialog.Close>
        </div>

        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogComponent;
