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
import { useEffect, useState } from "react";
import { findExams } from "@/services/exams.service";
import { Exam } from "@/types/exam.type";
import { CardExam } from "@/components/exams/CardExam";
import { ExamEspecialty } from "@/constants/examEspecialty";
import { Header } from "@/components/Header";

export default function Exams() {
  const [exams, setExams] = useState<Exam[]>([]);

  useEffect(() => {
    (async () => {
      const resp = await findExams();
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
            {ExamEspecialty.map((esp) => (
              <TouchableOpacity
                key={esp.id}
                className={`${esp.isSelected ? "bg-blue-500" : "bg-white"} px-4 py-2 rounded-full mr-4`}
              >
                <Text
                  className={`${esp.isSelected ? "text-white" : "text-black"}  text-lg`}
                >
                  {esp.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View className="w-full mb-2">
          <Text className="text-lg text-slate-500 font-semibold">
            Exames populares
          </Text>
        </View>
        <FlatList
          data={exams}
          keyExtractor={(item) => item.id as string}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CardExam exam={item} />}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
