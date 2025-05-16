
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_convertible.hpp:

Program Listing for File is_convertible.hpp
===========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_convertible.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\type_traits\is_convertible.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include "declval.hpp"
   
   #ifdef _MSC_VER
   #  pragma warning(push)
   // conversion from 'T' to 'To', possible loss of data
   #  pragma warning(disable : 4244)
   #endif
   
   // clang-format off
   #ifdef __ICCARM__
   // Suppress IAR Compiler Warning[Pa093]: implicit conversion from floating point to integer
   #pragma diag_suppress=Pa093
   #endif
   // clang-format on
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename From, typename To>
   struct is_convertible {
    protected:  // <- to avoid GCC's "all member functions in class are private"
     static int probe(To);
     static char probe(...);
   
     static From& from_;
   
    public:
     static const bool value = sizeof(probe(from_)) == sizeof(int);
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
   
   #ifdef _MSC_VER
   #  pragma warning(pop)
   #endif
   
   // clang-format off
   #ifdef __ICCARM__
   #pragma diag_default=Pa093
   #endif
   // clang-format on
