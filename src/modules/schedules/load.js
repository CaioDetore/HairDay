import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "./show.js";

const selectedDate = document.getElementById("date");

export async function scheduleDay() {
  // obtém a data do input
  const date = selectedDate.value;

  // busca os agendamentos.
  const dailySchedules = await scheduleFetchByDay({ date });

  // Renderiza os agendamentos.
  schedulesShow({ dailySchedules });

  // renderiza as horas disponíveis.
  hoursLoad({ date, dailySchedules });
}
