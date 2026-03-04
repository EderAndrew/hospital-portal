import { Schedule } from "./schedule.type";

export interface ScheduleState {
  schedule: Schedule | null;
  isLoading: boolean;
  isError: boolean;
  setSchedule: (schedule: Schedule | null) => void;
  updateSchedule: (data: Partial<Schedule>) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (isError: boolean) => void;
}