
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Strings_Adapters_StringObject.hpp:

Program Listing for File StringObject.hpp
=========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Strings_Adapters_StringObject.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Strings\Adapters\StringObject.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Strings/Adapters/RamString.hpp>
   #include <ArduinoJson/Strings/StringAdapter.hpp>
   #include <ArduinoJson/Strings/StringTraits.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename T>
   struct StringAdapter<
       T,
       typename enable_if<
           (string_traits<T>::has_cstr || string_traits<T>::has_data) &&
           (string_traits<T>::has_length || string_traits<T>::has_size)>::type> {
     typedef SizedRamString AdaptedString;
   
     static AdaptedString adapt(const T& s) {
       return AdaptedString(get_data(s), get_size(s));
     }
   
    private:
     template <typename U>
     static typename enable_if<string_traits<U>::has_size, size_t>::type get_size(
         const U& s) {
       return s.size();
     }
   
     template <typename U>
     static typename enable_if<!string_traits<U>::has_size, size_t>::type get_size(
         const U& s) {
       return s.length();
     }
   
     template <typename U>
     static typename enable_if<string_traits<U>::has_data, const char*>::type
     get_data(const U& s) {
       return s.data();
     }
   
     template <typename U>
     static typename enable_if<!string_traits<U>::has_data, const char*>::type
     get_data(const U& s) {
       return s.c_str();
     }
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
