#include <iostream>
using namespace std;
/*

*/
int main(){
  int a;
  a = cin.get();

  if(a>97 && a<123){
    cout<<"Lowercase"<<endl;
  }
  else if(a>64 && a<91){
    cout<<"Uppercase"<<endl;
  }
  else{
    cout<<"Numeric"<<endl;
  }
}
