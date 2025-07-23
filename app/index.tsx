import { Text, View, Image } from "react-native";
import { IoMdCart } from 'react-icons/io';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BiSolidCoupon } from 'react-icons/bi';
import { FaChevronDown } from 'react-icons/fa';

export default function Index() {
  return (
    <View className="flex-1">
      {/* <Text className="text-5xl text-dark-200 font-bold p-5 bg-amber-300 rounded">Bem vindo</Text> */}
      <View className=" bg-inherit flex-row justify-between items-center p-3">
        <MdKeyboardArrowLeft className="w-8 h-8"/>
        
        <View className="flex-row justify-center items-center gap-4">
          <BiSolidCoupon className="w-6 h-6" style={{ color: '#c21e63' }}/>
          <IoMdCart className="w-6 h-6" style={{ color: '#c21e63' }}/>
        </View>
      </View>

      <View className="flex-row justify-between items-center">
        <Text className="pl-5 text-base font-bold ">Best Dress Collection</Text>
        <Text className="text-xs pr-5">8250 itens</Text>

      </View>

      <View className="flex flex-row items-center h-8 bg-white rounded m-2">
        <Text className="flex flex-row text-xs items-end font-bold bg-gray-100 rounded pl-1 pr-1 m-1">Category  <FaChevronDown/></Text>
        <Text className="flex flex-row text-xs items-end font-bold bg-gray-100 rounded pl-1 pr-1 m-1">Color  <FaChevronDown/></Text>
        <Text className="flex flex-row text-xs items-end font-bold bg-gray-100 rounded pl-1 pr-1 m-1">Size  <FaChevronDown/></Text>
        <Text className="flex flex-row text-xs items-end font-bold bg-gray-100 rounded pl-1 pr-1 m-1">Price  <FaChevronDown/></Text>
        <Text className="flex flex-row text-xs items-end font-bold bg-gray-100 rounded pl-1 pr-1 m-1">More  <FaChevronDown/></Text>
      </View>

      <View className="grid-flow-col">
      <View className="bg-blue-300 flex rounded justify-center items-center">
        <Image className="flex mt-3" source={require('../assets/images/foto1.jpg')}/>
        <Text>Foto 1</Text>
      </View>
      <View className="bg-white">
        <Image className="w-10 h-10" source={require('../assets/images/foto2.jpg')}/>
        <Text>Foto 2</Text>
      </View>
      <View className="bg-white" >
        <Image className="w-10 h-10" source={require('../assets/images/foto3.png')}/>
        <Text>Foto 3</Text>
      </View>
      </View>

    </View>
  );
}
