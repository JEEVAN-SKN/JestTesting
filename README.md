
# JestTesting

Case-sensitive Anagram Checker - Javascript - Jest Testing 

 


## User Story:
 "As a user, I want to check whether two given strings are composed of the same set of case-sensitive characters  and each character can only occur once, so that I can identify case-sensitive anagrams."
## Test Cases:

***Test Case 01***:

&emsp;**Scenario**: Anagram checker considers character cases.  
&emsp;**Input**: "listen" and "silent"  
&emsp;**Expected Result**: The function should return true as the strings are case-sensitive anagrams.

***Test Case 02***:

&emsp;**Scenario**: Accuracy for different character sets.  
&emsp;**Input**: "hello" and "world"  
&emsp;**Expected Result**: The function should return false as the strings are not case-sensitive anagrams.

***Test Case 03***:

&emsp;**Scenario**: Sensitivity to different cases.  
&emsp;**Input**: "Astronomer" and "Moon Starer"  
&emsp;**Expected Result**: The function should return false as the strings are not case-sensitive anagrams.

***Test Case 04***:

&emsp;**Scenario**: Sensitivity to multi-word phrases.  
&emsp;**Input**: "debit card" and "bad credit"  
&emsp;**Expected Result**: The function should return true as the strings are not case-sensitive anagrams.

***Test Case 05***:

&emsp;**Scenario**: Sensitivity to different data types.  
&emsp;**Input**: 123 and "321"  
&emsp;**Expected Result**: The function should return false as the input types are different (number and string).


## Test Results Summary:

| S.No 	| Test Method Name                     	| Test Description                                                                                                                     	| Input                          	| Expected Output 	| Actual Output 	|
|------	|--------------------------------------	|--------------------------------------------------------------------------------------------------------------------------------------	|--------------------------------	|-----------------	|---------------	|
|   1  	| Basic Anagram Checker                	| Check whether two given strings are composed of the same set of case-sensitive characters and each character can only occur once. 	| "listen" and "silent"          	| True            	| True          	|
|   2  	| Different character sets accuracy    	| Check Anagram algorithm's accuracy over strings of different characters.                                                             	| "hello" and "world"            	| False           	| False         	|
|   3  	| Sensitivity to different cases       	| Check Anagram algorithm's accuracy over strings of Upper and lower case-characters.                                                  	| "Astronomer" and "Moon Starer" 	| False           	| False         	|
|   4  	| Multi-word phrases accuracy          	| Check Anagram algorithm's accuracy over multi-word strings.                                                                          	| "debit card" and "bad credit"  	| True            	| True          	|
|   5  	| Sensitivity to different data types. 	| Check Anagram algorithm's sensitivity to strings of different data types(string, number).                                            	| 123 and "321"                  	| False           	| False         	|

