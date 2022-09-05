 #include <iostream>
#include<math.h>
using namespace std;

int func(int n){

    for(int i=0;i<31;i++){
        int ans = pow(2,i);
        if(ans==n){
            return true;
        }
    }
    return false;
}

int main(){

    cout<<func(8)<<endl;
    cout<<func(0)<<endl;
}

