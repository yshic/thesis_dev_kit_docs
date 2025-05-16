
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_pgmspace_generic.hpp:

Program Listing for File pgmspace_generic.hpp
=============================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_pgmspace_generic.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\pgmspace_generic.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   
   #if ARDUINOJSON_ENABLE_PROGMEM
   #  include <ArduinoJson/Polyfills/pgmspace.hpp>
   #  include <ArduinoJson/Polyfills/type_traits.hpp>
   #endif
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   #if ARDUINOJSON_ENABLE_PROGMEM
   
   #  ifndef ARDUINOJSON_DEFINE_PROGMEM_ARRAY
   #    define ARDUINOJSON_DEFINE_PROGMEM_ARRAY(type, name, ...) \
         static type const name[] PROGMEM = __VA_ARGS__;
   #  endif
   
   template <typename T>
   inline const T* pgm_read(const T* const* p) {
     return reinterpret_cast<const T*>(pgm_read_ptr(p));
   }
   
   inline uint32_t pgm_read(const uint32_t* p) {
     return pgm_read_dword(p);
   }
   
   inline double pgm_read(const double* p) {
     return pgm_read_double(p);
   }
   
   inline float pgm_read(const float* p) {
     return pgm_read_float(p);
   }
   
   #else
   
   #  ifndef ARDUINOJSON_DEFINE_PROGMEM_ARRAY
   #    define ARDUINOJSON_DEFINE_PROGMEM_ARRAY(type, name, ...) \
         static type const name[] = __VA_ARGS__;
   #  endif
   
   template <typename T>
   inline T pgm_read(const T* p) {
     return *p;
   }
   
   #endif
   
   template <typename T>
   class pgm_ptr {
    public:
     explicit pgm_ptr(const T* ptr) : ptr_(ptr) {}
   
     T operator[](intptr_t index) const {
       return pgm_read(ptr_ + index);
     }
   
    private:
     const T* ptr_;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
