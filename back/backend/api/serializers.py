from django.contrib.auth.models import User
from rest_framework import serializers, generics
from .models import Outil,Note

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self,validated_data):
        print (validated_data)
        user=User.objects.create_user(**validated_data)
        return user    
        
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model= Note
        fields=["id","title","content","created_at","author"]
        extra_kwargs = {"author": {"read_only":True}}

class OutilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Outil
        fields = '__all__'
