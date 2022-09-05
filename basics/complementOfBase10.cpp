 #include <iostream>
#include<math.h>
using namespace std;
//works for small number only
int func(int n){
    int dec_ans = 0, i=0, comp_ans=0;
    if(n==0){
        return 1;
    }
    while(n!=0){
        int bit = n&1;
        dec_ans = (bit*pow(10,i) + dec_ans);

        int shift = !(bit);
        if(shift==1){
            comp_ans +=pow(2,i);
        }

        n = n>>1;
        i++;
    }
    return comp_ans;
}

int main(){

    cout<<func(5)<<endl;
    cout<<func(0)<<endl;
}

