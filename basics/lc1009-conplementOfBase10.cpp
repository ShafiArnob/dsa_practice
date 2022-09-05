 #include <iostream>
#include<math.h>
using namespace std;
//works for small number only
int func(int n){

    int m = n;
    int mask = 0;
    if(n==0){
        return 1;
    }
    while(m!=0){
        mask = (mask<<1) | 1;
        m = m>>1;
    }
    int ans = (~n) & mask;

    return ans;
}

int main(){

    cout<<func(5)<<endl;
    cout<<func(0)<<endl;
}

