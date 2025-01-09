import { scheduleCancel } from "../../services/schedule-cancel";
import { scheduleDay } from "./load";

const periods = document.querySelectorAll(".period");

// Gera evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  // captura evento de click
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // obtem li pai do elemento criado
      const item = event.target.closest("li");

      // pega id
      const { id } = item.dataset;

      if (id) {
        // confirma se o usuario quer cancelar
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          // faz a requisicao pra cancelar
          await scheduleCancel({ id });
          
          // atualiza lista
          await scheduleDay();
        }
      }
    }
  });
});
