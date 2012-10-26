<?php

namespace Blog\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Blog\Model\Blog;
use Blog\Form\BlogForm;

class BlogController extends AbstractActionController
{
    protected $blogTable;

    public function indexAction()
    {
        return new ViewModel();
/*        return new ViewModel(array(
            'blogs' => $this->getAlbumTable()->fetchAll(),
        ));
  */
    }

    public function addAction()
    {
        $form = new AlbumForm();
        $form->get('submit')->setAttribute('value', 'Add');

        $request = $this->getRequest();
        if ($request->isPost()) {
            $blog = new Album();
            $form->setInputFilter($blog->getInputFilter());
            $form->setData($request->getPost());
            if ($form->isValid()) {
                $blog->exchangeArray($form->getData());
                $this->getAlbumTable()->saveAlbum($blog);

                // Redirect to list of blogs
                return $this->redirect()->toRoute('blog');
            }
        }

        return array('form' => $form);
    }

    public function editAction()
    {
        $id = (int)$this->params('id');
        if (!$id) {
            return $this->redirect()->toRoute('blog', array('action'=>'add'));
        }
        $blog = $this->getAlbumTable()->getAlbum($id);

        $form = new AlbumForm();
        $form->bind($blog);
        $form->get('submit')->setAttribute('value', 'Edit');
        
        $request = $this->getRequest();
        if ($request->isPost()) {
            $form->setData($request->getPost());
            if ($form->isValid()) {
                $this->getAlbumTable()->saveAlbum($blog);

                // Redirect to list of blogs
                return $this->redirect()->toRoute('blog');
            }
        }

        return array(
            'id' => $id,
            'form' => $form,
        );
    }

    public function deleteAction()
    {
        $id = (int)$this->params('id');
        if (!$id) {
            return $this->redirect()->toRoute('blog');
        }

        $request = $this->getRequest();
        if ($request->isPost()) {
            $del = $request->getPost()->get('del', 'No');
            if ($del == 'Yes') {
                $id = (int)$request->getPost()->get('id');
                $this->getAlbumTable()->deleteAlbum($id);
            }

            // Redirect to list of blogs
            return $this->redirect()->toRoute('blog');
        }

        return array(
            'id' => $id,
            'blog' => $this->getAlbumTable()->getAlbum($id)
        );
    }

    public function getAlbumTable()
    {
        if (!$this->blogTable) {
            $sm = $this->getServiceLocator();
            $this->blogTable = $sm->get('Blog\Model\BlogTable');
        }
        return $this->blogTable;
    }    
}
