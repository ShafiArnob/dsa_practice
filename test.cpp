
#include <iostream>
using namespace std;

int main(){
    int num;
    cout<<"Enter Number: ";
    cin>>num;

    int prod = 1;
    int sum =0;
    while(num!=0){
        int rem = num%10;
        sum+=rem;
        prod*=rem;

        num/=10;
    }

    cout<<prod<<" "<<sum<<endl;
}
