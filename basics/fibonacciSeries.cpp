#include <iostream>
using namespace std;

int main(){
    int num;
    cout<<"Enter Number: ";
    cin>>num;

    int a = 0;
    int b = 1;

    cout<<a<<" "<<b<<" ";
    for(int i=1; i<=num; i++){
        int nextNumber = a+b;
        cout<<nextNumber<<" ";

        a=b;
        b=nextNumber;
    }
}
