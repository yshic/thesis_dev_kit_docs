
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Misc_SerializedValue.hpp:

Program Listing for File SerializedValue.hpp
============================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Misc_SerializedValue.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Misc\SerializedValue.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Strings/StringAdapters.hpp>
   
   ARDUINOJSON_BEGIN_PUBLIC_NAMESPACE
   
   // A special type of data that can be used to insert pregenerated JSON portions.
   template <typename T>
   class SerializedValue {
    public:
     explicit SerializedValue(T str) : str_(str) {}
     operator T() const {
       return str_;
     }
   
     const char* data() const {
       return str_.c_str();
     }
   
     size_t size() const {
       // CAUTION: the old Arduino String doesn't have size()
       return str_.length();
     }
   
    private:
     T str_;
   };
   
   template <typename TChar>
   class SerializedValue<TChar*> {
    public:
     explicit SerializedValue(TChar* p, size_t n) : data_(p), size_(n) {}
     operator TChar*() const {
       return data_;
     }
   
     TChar* data() const {
       return data_;
     }
   
     size_t size() const {
       return size_;
     }
   
    private:
     TChar* data_;
     size_t size_;
   };
   
   template <typename T>
   inline SerializedValue<T> serialized(T str) {
     return SerializedValue<T>(str);
   }
   
   template <typename TChar>
   inline SerializedValue<TChar*> serialized(TChar* p) {
     return SerializedValue<TChar*>(p, detail::adaptString(p).size());
   }
   
   template <typename TChar>
   inline SerializedValue<TChar*> serialized(TChar* p, size_t n) {
     return SerializedValue<TChar*>(p, n);
   }
   
   ARDUINOJSON_END_PUBLIC_NAMESPACE
