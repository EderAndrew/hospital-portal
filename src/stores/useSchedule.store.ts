import { Schedule } from "@/types/schedule.type";
import { ScheduleState } from "@/types/scheduleState";
import { create } from "zustand";

export const useScheduleStore = create<ScheduleState>((set) => ({
  schedule: null,
  isLoading: false,
  isError: false,

  setSchedule: (schedule) => set({ schedule }),
  updateSchedule: (data) => set((state) => ({
    schedule: {
        ...state.schedule,
        ...data
    } as Schedule
  })),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsError: (isError) => set({ isError }),
}));