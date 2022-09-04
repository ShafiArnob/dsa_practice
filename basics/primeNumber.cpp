#include <iostream>
using namespace std;

int main(){
    int num;
    cout<<"Enter Number: ";
    cin>>num;

    bool isPrime = true;
    for(int i=2; i<num; i++){

        if(num==0 || num==1){
            isPrime = false;
            break;
        }
        else{
            if(num%i==0){
                isPrime = false;
            }
        }
    }

    if(isPrime==true){
        cout<<"Prime Number"<<endl;
    }
    else{
        cout<<"Not Prime Number"<<endl;
    }
}
