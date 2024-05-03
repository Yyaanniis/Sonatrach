from django.urls import path
from . import views
from .views import OutilList, AjouterOutil

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
     path('admin/api/outil/add/', AjouterOutil.as_view(), name='ajouter_outil'),
    path('outils/', OutilList.as_view(), name='outil-list'),
]