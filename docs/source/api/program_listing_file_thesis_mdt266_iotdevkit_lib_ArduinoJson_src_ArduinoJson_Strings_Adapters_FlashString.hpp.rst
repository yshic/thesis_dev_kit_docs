
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Strings_Adapters_FlashString.hpp:

Program Listing for File FlashString.hpp
========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Strings_Adapters_FlashString.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Strings\Adapters\FlashString.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Polyfills/pgmspace.hpp>
   #include <ArduinoJson/Strings/StringAdapter.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   class FlashString {
    public:
     static const size_t typeSortKey = 1;
   
     FlashString(const __FlashStringHelper* str, size_t sz)
         : str_(reinterpret_cast<const char*>(str)), size_(sz) {}
   
     bool isNull() const {
       return !str_;
     }
   
     char operator[](size_t i) const {
       ARDUINOJSON_ASSERT(str_ != 0);
       ARDUINOJSON_ASSERT(i <= size_);
       return static_cast<char>(pgm_read_byte(str_ + i));
     }
   
     size_t size() const {
       return size_;
     }
   
     friend bool stringEquals(FlashString a, SizedRamString b) {
       ARDUINOJSON_ASSERT(a.typeSortKey < b.typeSortKey);
       ARDUINOJSON_ASSERT(!a.isNull());
       ARDUINOJSON_ASSERT(!b.isNull());
       if (a.size() != b.size())
         return false;
       return ::memcmp_P(b.data(), a.str_, a.size_) == 0;
     }
   
     friend int stringCompare(FlashString a, SizedRamString b) {
       ARDUINOJSON_ASSERT(a.typeSortKey < b.typeSortKey);
       ARDUINOJSON_ASSERT(!a.isNull());
       ARDUINOJSON_ASSERT(!b.isNull());
       size_t minsize = a.size() < b.size() ? a.size() : b.size();
       int res = ::memcmp_P(b.data(), a.str_, minsize);
       if (res)
         return -res;
       if (a.size() < b.size())
         return -1;
       if (a.size() > b.size())
         return 1;
       return 0;
     }
   
     friend void stringGetChars(FlashString s, char* p, size_t n) {
       ARDUINOJSON_ASSERT(s.size() <= n);
       ::memcpy_P(p, s.str_, n);
     }
   
     StringStoragePolicy::Copy storagePolicy() const {
       return StringStoragePolicy::Copy();
     }
   
    private:
     const char* str_;
     size_t size_;
   };
   
   template <>
   struct StringAdapter<const __FlashStringHelper*, void> {
     typedef FlashString AdaptedString;
   
     static AdaptedString adapt(const __FlashStringHelper* s) {
       return AdaptedString(s, s ? strlen_P(reinterpret_cast<const char*>(s)) : 0);
     }
   };
   
   template <>
   struct SizedStringAdapter<const __FlashStringHelper*, void> {
     typedef FlashString AdaptedString;
   
     static AdaptedString adapt(const __FlashStringHelper* s, size_t n) {
       return AdaptedString(s, n);
     }
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
