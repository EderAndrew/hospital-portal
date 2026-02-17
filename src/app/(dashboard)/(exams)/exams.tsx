import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SearchExamComponent } from "@/components/exams/SearchExamComponent";
import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";
import { findExams } from "@/services/exams.service";
import { Specialties } from "@/types/exam.type";
import { CardExam } from "@/components/exams/CardExam";
import { Header } from "@/components/Header";

export default function Exams() {
  const [exams, setExams] = useState<Specialties[]>([]);
  const [isSelected, setIsSelected] = useState<string>("");

  const filteredExams = useMemo(
    () =>
      exams
        .flatMap((s) => s.exams)
        .filter((ex) => ex.specialty.id === isSelected),
    [exams, isSelected],
  );

  useEffect(() => {
    (async () => {
      const resp = await findExams();
      setIsSelected(resp[0].id);
      setExams(resp);
    })();
  }, []);

  return (
    <SafeAreaView className="bg-gray-100 flex-1">
      <Header label="Exames disponíveis" isBack={false} />
      <View className="flex-1 flex items-center px-6">
        <SearchExamComponent />
        <View className="w-full my-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {exams.map((esp) => (
              <TouchableOpacity
                key={esp.id}
                className={`${esp.id === isSelected ? "bg-blue-500" : "bg-white"} px-4 py-2 rounded-full mr-4`}
                onPress={() => setIsSelected(esp.id)}
              >
                <Text
                  className={`${esp.id === isSelected ? "text-white" : "text-black"}  text-lg`}
                >
                  {esp.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View className="w-full mb-2">
          <Text className="text-lg text-slate-500 font-semibold">Exames</Text>
        </View>
        <FlatList
          data={filteredExams}
          keyExtractor={(item) => item.id as string}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CardExam exam={item} />}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
