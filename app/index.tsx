import { Text, View } from "react-native";
import { IoMdCart } from 'react-icons/io';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BiSolidCoupon } from 'react-icons/bi';

export default function Index() {
  return (
    <View className="flex-1 bg-gray-100">
      {/* <Text className="text-5xl text-dark-200 font-bold p-5 bg-amber-300 rounded">Bem vindo</Text> */}
      <View className=" bg-inherit flex-row justify-between items-center p-4">
        <MdKeyboardArrowLeft className="w-8 h-8"/>
        
        <View className="flex-row justify-center items-center gap-4">
          <BiSolidCoupon className="w-6 h-6" style={{ color: '#c21e63' }}/>
          <IoMdCart className="w-6 h-6" style={{ color: '#c21e63' }}/>
        </View>
      </View>

      <View className="flex-row justify-between items-center">
        <Text className="pl-5 text-base font-bold ">Best Dress Collection</Text>
        <Text className="text-xs pr-5">8000 items</Text>

      </View>

    </View>
  );
}
