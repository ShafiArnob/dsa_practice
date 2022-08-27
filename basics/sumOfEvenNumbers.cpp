#include <iostream>
using namespace std;

int main(){
    int num;
    cout<<"Enter Number: ";
    cin>>num;
    int i=0, sum=0;
    while(i<=num){
        if(i%2==0){
            sum+=i;
        }
        i+=1;
    }
    cout<<"Sum of Even Number: "<<sum<<endl;
}
