from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, NoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note, Outil  
from .serializers import UserSerializer, NoteSerializer, OutilSerializer 
# Create your views here.

class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

    def perform_create(self,serializer):
        if serializer.is_valid():
         serializer.save(author=self.request.user)
        else:
         print(serializer.errors)
         
class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
      user =self.request.user
      return Note.objects.filter(author=user)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
class OutilList(generics.ListAPIView):
    queryset = Outil.objects.all()
    serializer_class = OutilSerializer  

class AjouterOutil(generics.CreateAPIView):
    queryset = Outil.objects.all()
    serializer_class = OutilSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    

def liste_outils(request):
    outils = Outil.objects.all()
    return render(request, 'liste_outils.html', {'outils': outils})