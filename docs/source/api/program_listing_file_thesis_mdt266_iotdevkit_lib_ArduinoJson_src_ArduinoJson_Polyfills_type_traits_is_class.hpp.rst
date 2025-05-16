
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_class.hpp:

Program Listing for File is_class.hpp
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_class.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\type_traits\is_class.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include "declval.hpp"
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename T>
   struct is_class {
    protected:  // <- to avoid GCC's "all member functions in class are private"
     template <typename U>
     static int probe(void (U::*)(void));
     template <typename>
     static char probe(...);
   
    public:
     static const bool value = sizeof(probe<T>(0)) == sizeof(int);
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
